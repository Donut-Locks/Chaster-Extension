const { default: fetch } = require('node-fetch');

module.exports = class TokenManager{

    static CLIENT_ID = "";
    static CLIENT_SECRET = "";
    static DEV_TOKEN = "";
    static USE_DEVTOKEN = false;
    static REUSE_TOKENS = true;
    static TOKEN_URL = "https://sso.chaster.app/auth/realms/app/protocol/openid-connect/token?";
    
    /**
     * 
     * @param {import('./interface').TokenManagerData} data 
     * @param {import('./interface').TokenManagerOptions} options 
     */
    constructor({
        access_token, 
        expires_in, 
        refresh_token, 
        refresh_expires_in = new Date(0),
        scope=[], 
        token_type='Bearer', 
    }={}){

        checkRequiredParams({
            CLIENT_ID: TokenManager.CLIENT_ID,
            CLIENT_SECRET: TokenManager.CLIENT_SECRET
        });

        if(TokenManager.USE_DEVTOKEN==true && !TokenManager.DEV_TOKEN){
            throw new Error("DEV_TOKEN is required when USE_DEVTOKEN is true.")
        }
        if (!access_token && !refresh_token && TokenManager.USE_DEVTOKEN==false) {
            throw new Error("An access_token or refresh_token must be provided.");
        }

        this.accessToken = access_token;
        this.expiresAt = this.#getExpiry(expires_in);
        this.refreshToken = refresh_token;
        this.refreshexpiresAt = this.#getExpiry(refresh_expires_in);;
        this.scope = typeof scope === 'string' ? scope.split(" ") : scope;
        this.token_type = token_type;
        this.notBeforePolicy = 0;
    }

    async getAccessToken(){

        if(TokenManager.USE_DEVTOKEN == true){
            return `${this.token_type} ${TokenManager.DEV_TOKEN}`;
        }

        if(this.expiresAt > new Date() && TokenManager.REUSE_TOKENS == true){
            return `${this.token_type} ${this.accessToken}`;
        }

        const { access_token } = await this.refreshAccessToken()

        return `${this.token_type} ${access_token}`;
    }

    async refreshAccessToken(){
        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('client_id', TokenManager.CLIENT_ID);
        params.append('client_secret', TokenManager.CLIENT_SECRET);
        params.append('refresh_token', this.refreshToken);

        const request = await fetch(TokenManager.TOKEN_URL, {
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        });

        /**@type {import('./interface').ChasterOAuthAuthorization} */
        const data = await request.json();

        if(!request.ok) throw data;

        if(TokenManager.REUSE_TOKENS==true){
            this.#parse(data);
        }

        return data;
    }

    /**
     * 
     * @param {import('./interface').ChasterOAuthAuthorization} data 
     */
    #parse({
        access_token=this.accessToken,
        expires_in=this.expiresAt,
        refresh_token=this.refreshToken,
        refresh_expires_in=this.refreshexpiresAt,
        scope=this.scope,
        token_type=this.token_type,
    }={}){
        this.accessToken = access_token;
        this.expiresAt = this.#getExpiry(expires_in);
        this.refreshToken = refresh_token;
        this.refreshexpiresAt = this.#getExpiry(refresh_expires_in);
        this.scopes = typeof scope === 'string' ? scope.split(" ") : scope;
        this.token_type = token_type;
        return this;
    }

    static initilize({
        clientId=this.CLIENT_ID,
        clientSecret=this.CLIENT_SECRET,
        devToken=this.DEV_TOKEN,
        useDevTokenOnly=this.USE_DEVTOKEN,
        reuseTokens=this.REUSE_TOKENS,
    }){
        this.CLIENT_ID = clientId
        this.CLIENT_SECRET = clientSecret
        this.DEV_TOKEN = devToken
        this.USE_DEVTOKEN = useDevTokenOnly
        this.REUSE_TOKENS = reuseTokens
    }

    #getExpiry(data){
        if(data instanceof Date || !data){
            return data;
        }
        const date = new Date();
        date.setSeconds(date.getSeconds() + data);
        return date;
    }
}

function checkRequiredParams(params) {
    for (const [paramName, paramValue] of Object.entries(params)) {
        if (paramValue === undefined || paramValue === null) {
            throw new Error(`TokenManager requires a ${paramName}.`);
        }
    }
}