export interface ChasterOAuth{
    access_token: string,
    expires_in: 900,
    refresh_token: string 
    refresh_expires_in: 0,
    scope: string,
    session_state: string,
    token_type: 'Bearer',
    "not-before-policy": 0,
}

export interface TokenManagerConstructor{
    access_token?: string,
    expires_in?: number,
    refresh_token?: string 
    refresh_expires_in?: number,
    scope?: ChasterScopes[],
    session_state?: string,
    token_type?: 'Bearer',
    "not-before-policy"?: 0,
}

export interface TokenManagerJSON{
    accessToken: string,
    expiresAt: Date,
    refreshToken: string,
    refreshexpiresAt: Date
    scope: ChasterScopes[]
    token_type: string
    notBeforePolicy: number
}

export interface TokenManagerInitilizer{
    clientId: string
    clientSecret: string
    devToken: string
    useDevTokenOnly: boolean
    reuseTokens: boolean
}

export type ChasterScopes = 'profile'|'locks'|'shared_locks'|'keyholder'|'messaging'

declare class TokenManager{

    /**
     * Public identifier for a Chaster application
     */
    static CLIENT_ID: string;

    /**
     * Confidential and should only be used to authenticate Chaster application, should be stored securely
     */
    static CLIENT_SECRET: string;

    /**
     * Temporary access token used for development, should be stored securely
     */
    static DEV_TOKEN: string;

    /**
     * Force TokenManager to strictly use the dev token, 
     */
    static USE_DEVTOKEN: boolean = false;

    /**
     * Allows TokenManager to use an access_token until expiration
     * @default {true} 
     */
    static REUSE_TOKENS: boolean = true;

    /**
     * Token URL to refresh access tokens, can be ignored if only using Chasters API.
     * @default {'https://sso.chaster.app/auth/realms/app/protocol/openid-connect/token?'}
     */
    static TOKEN_URL:string;

    constructor(credentials: TokenManagerConstructor)

    public accessToken: string;
    public expiresAt: Date;
    public refreshToken: string
    public refreshexpiresAt: Date
    public scope: ChasterScopes[]
    public token_type: string
    public notBeforePolicy: number;

    getAccessToken(): Promise<string>;

    refreshAccessToken(): Promise<ChasterOAuth>;

    /**
     * Initilize Token Manager with a Chaster application detials.
     */
    static initilize(properties: TokenManagerInitilizer)
}

export = TokenManager;