export interface ChasterOAuth extends ChasterOAuthRefresh{
    "not-before-policy": number,
}
export interface ChasterOAuthRefresh{
    access_token: string,
    expires_in: number,
    refresh_token: string 
    refresh_expires_in: number,
    scope: string,
    session_state: string,
    token_type: string,
}

export interface TokenManagerConstructor{
    access_token?: string,
    refresh_token?: string 
}


export interface TokenManagerInitilizer{
    clientId: string
    clientSecret: string
    devToken?: string
    useDevTokenOnly?: boolean
    reuseTokens?: boolean
}

export type ChasterScopes = "profile" | "locks" | "shared_locks" | "keyholder" | "messaging" | "email" | "offline_access"

declare class ChasterTokenManager{


    /**
     * Initilize properties that will aid and allow functionality of the class.
     */
    static initilize(options: TokenManagerInitilizer);


    /**
     * 
     * @param tokens The tokens need to access protected resources indefinetly
     * @param useDevToken Allows for the use of a dev token in a single instantiation.
     */
    constructor(tokens: TokenManagerConstructor, useDevToken: boolean);

    /**
     * Retrieves and Chaster `access_token` for accessing protected resources.
     * 
     * Note: 
     * The token type is also included
     */
    getAccessToken(): Promise<string>;

    /**
     * Request a new `access_token` along with further details used in the OAuth2 Flow. 
     */
    refreshAccessToken(): Promise<ChasterOAuthRefresh>

    /**
     * Clears already stored `access_token` from memory and any further properties which relate to the `access_token`
     */
    clear(): void

    /**
     * Checks both the static and local proerty for the dev token usage state.
     */
    isUsingDevToken(): boolean;

    /**
     * Whether all tokens have expired and it is impossible to retrieve protected resources.
     */
    hasTokensExpired(): boolean

    /**
     * Whether the `access_token` has expired.
     */
    hasAccessTokenExpired(): boolean;

    /**
     * Whether the `refresh_token` has expired.
     */
    hasRefreshTokenExpired(): boolean
}

export = ChasterTokenManager;