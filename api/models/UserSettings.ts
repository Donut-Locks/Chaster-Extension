/* tslint:disable */
/* eslint-disable */
/**
 * Chaster
 * Chaster Public API  API documentation: [https://docs.chaster.app/api-introduction](https://docs.chaster.app/api-introduction) 
 *
 * The version of the OpenAPI document: 0.12.54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserSettings
 */
export interface UserSettings {
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    showLocksOnProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    showOnlineStatus: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    showDiscordOnProfile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    emailOnWearerUsesSharedLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    messageOnWearerUsesSharedLock: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    discordNotifications: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    discordMessagingNotifications: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserSettings
     */
    displayNsfw: boolean;
}

/**
 * Check if a given object implements the UserSettings interface.
 */
export function instanceOfUserSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "showLocksOnProfile" in value;
    isInstance = isInstance && "showOnlineStatus" in value;
    isInstance = isInstance && "showDiscordOnProfile" in value;
    isInstance = isInstance && "emailOnWearerUsesSharedLock" in value;
    isInstance = isInstance && "messageOnWearerUsesSharedLock" in value;
    isInstance = isInstance && "discordNotifications" in value;
    isInstance = isInstance && "discordMessagingNotifications" in value;
    isInstance = isInstance && "displayNsfw" in value;

    return isInstance;
}

export function UserSettingsFromJSON(json: any): UserSettings {
    return UserSettingsFromJSONTyped(json, false);
}

export function UserSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'showLocksOnProfile': json['showLocksOnProfile'],
        'showOnlineStatus': json['showOnlineStatus'],
        'showDiscordOnProfile': json['showDiscordOnProfile'],
        'emailOnWearerUsesSharedLock': json['emailOnWearerUsesSharedLock'],
        'messageOnWearerUsesSharedLock': json['messageOnWearerUsesSharedLock'],
        'discordNotifications': json['discordNotifications'],
        'discordMessagingNotifications': json['discordMessagingNotifications'],
        'displayNsfw': json['displayNsfw'],
    };
}

export function UserSettingsToJSON(value?: UserSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'showLocksOnProfile': value.showLocksOnProfile,
        'showOnlineStatus': value.showOnlineStatus,
        'showDiscordOnProfile': value.showDiscordOnProfile,
        'emailOnWearerUsesSharedLock': value.emailOnWearerUsesSharedLock,
        'messageOnWearerUsesSharedLock': value.messageOnWearerUsesSharedLock,
        'discordNotifications': value.discordNotifications,
        'discordMessagingNotifications': value.discordMessagingNotifications,
        'displayNsfw': value.displayNsfw,
    };
}

