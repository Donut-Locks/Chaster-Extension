const { default: fetch } = require('node-fetch');
const JWT = require('jsonwebtoken');

module.exports = class ChasterTokenManager{

    static CLIENT_ID = null;
    static CLIENT_SECRET = null;
    static DEV_TOKEN = null;
    static USE_DEVTOKEN = false;
    static REUSE_TOKENS = true;
    static TOKEN_URL = "https://sso.chaster.app/auth/realms/app/protocol/openid-connect/token?";

    static initilize({
        clientId=this.CLIENT_ID,
        clientSecret=this.CLIENT_SECRET,
        devToken=this.DEV_TOKEN,
        useDevTokenOnly=this.USE_DEVTOKEN,
        reuseTokens=this.REUSE_TOKENS,
    }){
        ChasterTokenManager.CLIENT_ID = clientId
        ChasterTokenManager.CLIENT_SECRET = clientSecret
        ChasterTokenManager.DEV_TOKEN = devToken
        ChasterTokenManager.USE_DEVTOKEN = useDevTokenOnly
        ChasterTokenManager.REUSE_TOKENS = reuseTokens
    }

    constructor(tokens={}, useDevToken=false){
    
        if(!ChasterTokenManager.DEV_TOKEN && useDevToken == true){
            throw new Error("Cannot use dev token when one has not been provided.")
        }

        const { access_token, refresh_token } = tokens

        const accessTokenJSON = JWT.decode(access_token, {json: true});
        const refreshTokenJSON = JWT.decode(refresh_token, {json: true});

        if(access_token && !accessTokenJSON){
            throw new Error(`Expected Chaster JWT access token, recieved ${access_token}`)
        }
        if(refresh_token && !refreshTokenJSON){
            throw new Error(`Expected Chaster JWT refresh token, recieved ${refresh_token}`)
        }

        this.accessToken = access_token;

        const expires = new Date(accessTokenJSON?.exp * 1000)
        this.expiresAt = expires instanceof Date && !isNaN(expires) ? expires : undefined;

        if(!this.expiresAt > new Date())

        this.tokenType = accessTokenJSON?.typ;

        this.refreshToken = refresh_token;

        this.refreshExpiresAt = refreshTokenJSON != null ? Infinity : undefined;

        this.scopes = accessTokenJSON ? this.#parseScopes(accessTokenJSON?.scope) : this.#parseScopes(refreshTokenJSON?.scope);

        this.sessionState = accessTokenJSON ? accessTokenJSON?.session_state : refreshTokenJSON?.session_state;

        this.useDevToken = useDevToken;

        if(this.hasTokensExpired()){
            throw new Error("All token have expired.")
        }

    }

    async getAccessToken(){
        if(this.isUsingDevToken()){
            return `${this.tokenType} ${ChasterTokenManager.DEV_TOKEN}`;
        }

        if(this.expiresAt > new Date() && TokenManager.REUSE_TOKENS == true){
            return `${this.tokenType} ${this.accessToken}`;
        }

        const { access_token } = await this.refreshAccessToken()

        return `${this.tokenType} ${access_token}`;
    }

    async refreshAccessToken(){
        const params = new URLSearchParams();
        params.append('grant_type', 'refresh_token');
        params.append('client_id', ChasterTokenManager.CLIENT_ID);

        console.log(ChasterTokenManager.CLIENT_ID);
        params.append('client_secret', ChasterTokenManager.CLIENT_SECRET);
        params.append('refresh_token', this.refreshToken);

        const request = await fetch(ChasterTokenManager.TOKEN_URL, {
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
        });

        
        /**
         * @type {import('./tokenManager').ChasterOAuth}
         */
        const data = await request.json();
        if(!request.ok) throw data;
        
        const { token_type, refresh_token, access_token, expires_in, refresh_expires_in, scope, session_state } = data;

        if(ChasterTokenManager.REUSE_TOKENS==true){
            this.accessToken = access_token;
            this.expiresAt = this.#getExpireDate(expires_in);
            this.refreshExpiresAt = refresh_expires_in <= 0 ? Infinity : this.#getExpireDate(refresh_expires_in);
            this.scopes = this.#parseScopes(scope);
            this.sessionState = session_state;
        }
        
        this.tokenType = token_type;
        this.refreshToken = refresh_token;
    
        return data;
    }

    #getExpireDate(expiresIn){
        if(!expiresIn) return;
        const date = new Date();
        date.setSeconds(date.getSeconds() + expiresIn)
        return date;
    }

    #parseScopes(scope=[]){
        return typeof scope == 'string' ? scope.split(" ") : scope;
    }

    clear(){
        this.accessToken = undefined;
        this.expiresAt = undefined;
        this.tokenType = undefined;
    }

    isUsingDevToken(){
        return (ChasterTokenManager.DEV_TOKEN && ChasterTokenManager.USE_DEVTOKEN == true) == true || (ChasterTokenManager.DEV_TOKEN && this.useDevToken) == true
    }

    hasTokensExpired(){
        const isUsingDevToken = this.isUsingDevToken();
        const hasRefreshTokenExpired = this.hasRefreshTokenExpired();
        const hasAccessTokenExpired = this.hasAccessTokenExpired()
        return hasAccessTokenExpired && hasRefreshTokenExpired && isUsingDevToken == false;
    }

    hasAccessTokenExpired(){
        return !this.expiresAt ? true : this.expiresAt < new Date();
    }

    hasRefreshTokenExpired(){
        return !this.refreshExpiresAt ? true : this.refreshExpiresAt < new Date();
    }
}