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
import type { FeatureSwitchEnum } from './FeatureSwitchEnum';
import {
    FeatureSwitchEnumFromJSON,
    FeatureSwitchEnumFromJSONTyped,
    FeatureSwitchEnumToJSON,
} from './FeatureSwitchEnum';
import type { UserForPublicMetadata } from './UserForPublicMetadata';
import {
    UserForPublicMetadataFromJSON,
    UserForPublicMetadataFromJSONTyped,
    UserForPublicMetadataToJSON,
} from './UserForPublicMetadata';
import type { UserRoleEnum } from './UserRoleEnum';
import {
    UserRoleEnumFromJSON,
    UserRoleEnumFromJSONTyped,
    UserRoleEnumToJSON,
} from './UserRoleEnum';

/**
 * The creator
 * @export
 * @interface SharedLockForPublicUser
 */
export interface SharedLockForPublicUser {
    /**
     * 
     * @type {UserRoleEnum}
     * @memberof SharedLockForPublicUser
     */
    role: UserRoleEnum;
    /**
     * Enabled features
     * @type {Array<FeatureSwitchEnum>}
     * @memberof SharedLockForPublicUser
     */
    features: Array<FeatureSwitchEnum>;
    /**
     * The user id
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    id: string;
    /**
     * The username
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    username: string;
    /**
     * Whether the user has a Premium subscription
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isPremium: boolean;
    /**
     * The profile description
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    description: string;
    /**
     * The location
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    location: string;
    /**
     * The gender
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    gender: string;
    /**
     * The age
     * @type {number}
     * @memberof SharedLockForPublicUser
     */
    age?: number;
    /**
     * Whether the user is a findom
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isFindom: boolean;
    /**
     * The avatar URL
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    avatarUrl: string;
    /**
     * Whether the user is online
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    online: boolean;
    /**
     * User last seen, in seconds
     * @type {number}
     * @memberof SharedLockForPublicUser
     */
    lastSeen: number | null;
    /**
     * Whether the user is an admin
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isAdmin: boolean;
    /**
     * Whether the user is a moderator
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isModerator: boolean;
    /**
     * 
     * @type {UserForPublicMetadata}
     * @memberof SharedLockForPublicUser
     */
    metadata: UserForPublicMetadata;
    /**
     * User full location
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    fullLocation: string;
    /**
     * The Discord ID
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    discordId?: string;
    /**
     * The Discord username
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    discordUsername?: string;
    /**
     * Whether the user is disabled
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isDisabled: boolean;
    /**
     * Whether the user is suspended by the Chaster team
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isSuspended: boolean;
    /**
     * Joined date (year and month, YYYY-MM)
     * @type {string}
     * @memberof SharedLockForPublicUser
     */
    joinedAt: string;
    /**
     * Whether the user is a new member
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isNewMember: boolean;
    /**
     * Whether the user is suspended or disabled
     * @type {boolean}
     * @memberof SharedLockForPublicUser
     */
    isSuspendedOrDisabled: boolean;
}

/**
 * Check if a given object implements the SharedLockForPublicUser interface.
 */
export function instanceOfSharedLockForPublicUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "features" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "isPremium" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "gender" in value;
    isInstance = isInstance && "isFindom" in value;
    isInstance = isInstance && "avatarUrl" in value;
    isInstance = isInstance && "online" in value;
    isInstance = isInstance && "lastSeen" in value;
    isInstance = isInstance && "isAdmin" in value;
    isInstance = isInstance && "isModerator" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "fullLocation" in value;
    isInstance = isInstance && "isDisabled" in value;
    isInstance = isInstance && "isSuspended" in value;
    isInstance = isInstance && "joinedAt" in value;
    isInstance = isInstance && "isNewMember" in value;
    isInstance = isInstance && "isSuspendedOrDisabled" in value;

    return isInstance;
}

export function SharedLockForPublicUserFromJSON(json: any): SharedLockForPublicUser {
    return SharedLockForPublicUserFromJSONTyped(json, false);
}

export function SharedLockForPublicUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedLockForPublicUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': UserRoleEnumFromJSON(json['role']),
        'features': ((json['features'] as Array<any>).map(FeatureSwitchEnumFromJSON)),
        'id': json['_id'],
        'username': json['username'],
        'isPremium': json['isPremium'],
        'description': json['description'],
        'location': json['location'],
        'gender': json['gender'],
        'age': !exists(json, 'age') ? undefined : json['age'],
        'isFindom': json['isFindom'],
        'avatarUrl': json['avatarUrl'],
        'online': json['online'],
        'lastSeen': json['lastSeen'],
        'isAdmin': json['isAdmin'],
        'isModerator': json['isModerator'],
        'metadata': UserForPublicMetadataFromJSON(json['metadata']),
        'fullLocation': json['fullLocation'],
        'discordId': !exists(json, 'discordId') ? undefined : json['discordId'],
        'discordUsername': !exists(json, 'discordUsername') ? undefined : json['discordUsername'],
        'isDisabled': json['isDisabled'],
        'isSuspended': json['isSuspended'],
        'joinedAt': json['joinedAt'],
        'isNewMember': json['isNewMember'],
        'isSuspendedOrDisabled': json['isSuspendedOrDisabled'],
    };
}

export function SharedLockForPublicUserToJSON(value?: SharedLockForPublicUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': UserRoleEnumToJSON(value.role),
        'features': ((value.features as Array<any>).map(FeatureSwitchEnumToJSON)),
        '_id': value.id,
        'username': value.username,
        'isPremium': value.isPremium,
        'description': value.description,
        'location': value.location,
        'gender': value.gender,
        'age': value.age,
        'isFindom': value.isFindom,
        'avatarUrl': value.avatarUrl,
        'online': value.online,
        'lastSeen': value.lastSeen,
        'isAdmin': value.isAdmin,
        'isModerator': value.isModerator,
        'metadata': UserForPublicMetadataToJSON(value.metadata),
        'fullLocation': value.fullLocation,
        'discordId': value.discordId,
        'discordUsername': value.discordUsername,
        'isDisabled': value.isDisabled,
        'isSuspended': value.isSuspended,
        'joinedAt': value.joinedAt,
        'isNewMember': value.isNewMember,
        'isSuspendedOrDisabled': value.isSuspendedOrDisabled,
    };
}

