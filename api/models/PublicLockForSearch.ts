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
import type { LockForPublic } from './LockForPublic';
import {
    LockForPublicFromJSON,
    LockForPublicFromJSONTyped,
    LockForPublicToJSON,
} from './LockForPublic';
import type { PublicLockJoinRules } from './PublicLockJoinRules';
import {
    PublicLockJoinRulesFromJSON,
    PublicLockJoinRulesFromJSONTyped,
    PublicLockJoinRulesToJSON,
} from './PublicLockJoinRules';
import type { SharedLockDurationModeEnum } from './SharedLockDurationModeEnum';
import {
    SharedLockDurationModeEnumFromJSON,
    SharedLockDurationModeEnumFromJSONTyped,
    SharedLockDurationModeEnumToJSON,
} from './SharedLockDurationModeEnum';
import type { SharedLockForPublicUnsplashPhoto } from './SharedLockForPublicUnsplashPhoto';
import {
    SharedLockForPublicUnsplashPhotoFromJSON,
    SharedLockForPublicUnsplashPhotoFromJSONTyped,
    SharedLockForPublicUnsplashPhotoToJSON,
} from './SharedLockForPublicUnsplashPhoto';
import type { SharedLockForPublicUser } from './SharedLockForPublicUser';
import {
    SharedLockForPublicUserFromJSON,
    SharedLockForPublicUserFromJSONTyped,
    SharedLockForPublicUserToJSON,
} from './SharedLockForPublicUser';

/**
 * 
 * @export
 * @interface PublicLockForSearch
 */
export interface PublicLockForSearch {
    /**
     * 
     * @type {SharedLockDurationModeEnum}
     * @memberof PublicLockForSearch
     */
    durationMode: SharedLockDurationModeEnum;
    /**
     * The maximum duration of the lock, in seconds

After this duration, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {number}
     * @memberof PublicLockForSearch
     */
    maxLimitDuration: number | null;
    /**
     * The minimum date
     * @type {Date}
     * @memberof PublicLockForSearch
     */
    minDate: Date | null;
    /**
     * The maximum date
     * @type {Date}
     * @memberof PublicLockForSearch
     */
    maxDate: Date | null;
    /**
     * The maximum date of the lock

After this date, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {Date}
     * @memberof PublicLockForSearch
     */
    maxLimitDate: Date | null;
    /**
     * Whether the remaining time should be displayed to the wearer
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    displayRemainingTime: boolean;
    /**
     * Whether the lock is limited in time
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    limitLockTime: boolean;
    /**
     * The number of maximum locked users for this shared lock
     * @type {number}
     * @memberof PublicLockForSearch
     */
    maxLockedUsers: number | null;
    /**
     * Whether the lock is public
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    isPublic: boolean;
    /**
     * Whether the shared lock requires contact from wearer

Displayed for information purposes only on the lock page
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    requireContact: boolean;
    /**
     * The name
     * @type {string}
     * @memberof PublicLockForSearch
     */
    name: string;
    /**
     * The description
     * @type {string}
     * @memberof PublicLockForSearch
     */
    description: string;
    /**
     * 
     * @type {SharedLockForPublicUnsplashPhoto}
     * @memberof PublicLockForSearch
     */
    unsplashPhoto: SharedLockForPublicUnsplashPhoto | null;
    /**
     * Whether the time information should be hidden from the history
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    hideTimeLogs: boolean;
    /**
     * Last saved at
     * @type {Date}
     * @memberof PublicLockForSearch
     */
    lastSavedAt: Date;
    /**
     * The shared lock id
     * @type {string}
     * @memberof PublicLockForSearch
     */
    id: string;
    /**
     * The minimum duration, in seconds
     * @type {number}
     * @memberof PublicLockForSearch
     */
    minDuration: number;
    /**
     * The maximum duration, in seconds
     * @type {number}
     * @memberof PublicLockForSearch
     */
    maxDuration: number;
    /**
     * The calculated max limit duration
     * @type {number}
     * @memberof PublicLockForSearch
     */
    calculatedMaxLimitDuration: number | null;
    /**
     * 
     * @type {SharedLockForPublicUser}
     * @memberof PublicLockForSearch
     */
    user: SharedLockForPublicUser;
    /**
     * Created at
     * @type {string}
     * @memberof PublicLockForSearch
     */
    createdAt: string;
    /**
     * Updated at
     * @type {string}
     * @memberof PublicLockForSearch
     */
    updatedAt: string | null;
    /**
     * Deleted at
     * @type {string}
     * @memberof PublicLockForSearch
     */
    deletedAt: string | null;
    /**
     * Archived at
     * @type {string}
     * @memberof PublicLockForSearch
     */
    archivedAt: string | null;
    /**
     * List of locks

Only returned in shared locks endpoints
     * @type {Array<LockForPublic>}
     * @memberof PublicLockForSearch
     */
    locks?: Array<LockForPublic>;
    /**
     * Whether the lock requires a password
     * @type {boolean}
     * @memberof PublicLockForSearch
     */
    requirePassword: boolean;
    /**
     * 
     * @type {PublicLockJoinRules}
     * @memberof PublicLockForSearch
     */
    joinRules: PublicLockJoinRules;
}

/**
 * Check if a given object implements the PublicLockForSearch interface.
 */
export function instanceOfPublicLockForSearch(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "durationMode" in value;
    isInstance = isInstance && "maxLimitDuration" in value;
    isInstance = isInstance && "minDate" in value;
    isInstance = isInstance && "maxDate" in value;
    isInstance = isInstance && "maxLimitDate" in value;
    isInstance = isInstance && "displayRemainingTime" in value;
    isInstance = isInstance && "limitLockTime" in value;
    isInstance = isInstance && "maxLockedUsers" in value;
    isInstance = isInstance && "isPublic" in value;
    isInstance = isInstance && "requireContact" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "unsplashPhoto" in value;
    isInstance = isInstance && "hideTimeLogs" in value;
    isInstance = isInstance && "lastSavedAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "minDuration" in value;
    isInstance = isInstance && "maxDuration" in value;
    isInstance = isInstance && "calculatedMaxLimitDuration" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "deletedAt" in value;
    isInstance = isInstance && "archivedAt" in value;
    isInstance = isInstance && "requirePassword" in value;
    isInstance = isInstance && "joinRules" in value;

    return isInstance;
}

export function PublicLockForSearchFromJSON(json: any): PublicLockForSearch {
    return PublicLockForSearchFromJSONTyped(json, false);
}

export function PublicLockForSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicLockForSearch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'durationMode': SharedLockDurationModeEnumFromJSON(json['durationMode']),
        'maxLimitDuration': json['maxLimitDuration'],
        'minDate': (json['minDate'] === null ? null : new Date(json['minDate'])),
        'maxDate': (json['maxDate'] === null ? null : new Date(json['maxDate'])),
        'maxLimitDate': (json['maxLimitDate'] === null ? null : new Date(json['maxLimitDate'])),
        'displayRemainingTime': json['displayRemainingTime'],
        'limitLockTime': json['limitLockTime'],
        'maxLockedUsers': json['maxLockedUsers'],
        'isPublic': json['isPublic'],
        'requireContact': json['requireContact'],
        'name': json['name'],
        'description': json['description'],
        'unsplashPhoto': SharedLockForPublicUnsplashPhotoFromJSON(json['unsplashPhoto']),
        'hideTimeLogs': json['hideTimeLogs'],
        'lastSavedAt': (new Date(json['lastSavedAt'])),
        'id': json['_id'],
        'minDuration': json['minDuration'],
        'maxDuration': json['maxDuration'],
        'calculatedMaxLimitDuration': json['calculatedMaxLimitDuration'],
        'user': SharedLockForPublicUserFromJSON(json['user']),
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'deletedAt': json['deletedAt'],
        'archivedAt': json['archivedAt'],
        'locks': !exists(json, 'locks') ? undefined : ((json['locks'] as Array<any>).map(LockForPublicFromJSON)),
        'requirePassword': json['requirePassword'],
        'joinRules': PublicLockJoinRulesFromJSON(json['joinRules']),
    };
}

export function PublicLockForSearchToJSON(value?: PublicLockForSearch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'durationMode': SharedLockDurationModeEnumToJSON(value.durationMode),
        'maxLimitDuration': value.maxLimitDuration,
        'minDate': (value.minDate === null ? null : value.minDate.toISOString()),
        'maxDate': (value.maxDate === null ? null : value.maxDate.toISOString()),
        'maxLimitDate': (value.maxLimitDate === null ? null : value.maxLimitDate.toISOString()),
        'displayRemainingTime': value.displayRemainingTime,
        'limitLockTime': value.limitLockTime,
        'maxLockedUsers': value.maxLockedUsers,
        'isPublic': value.isPublic,
        'requireContact': value.requireContact,
        'name': value.name,
        'description': value.description,
        'unsplashPhoto': SharedLockForPublicUnsplashPhotoToJSON(value.unsplashPhoto),
        'hideTimeLogs': value.hideTimeLogs,
        'lastSavedAt': (value.lastSavedAt.toISOString()),
        '_id': value.id,
        'minDuration': value.minDuration,
        'maxDuration': value.maxDuration,
        'calculatedMaxLimitDuration': value.calculatedMaxLimitDuration,
        'user': SharedLockForPublicUserToJSON(value.user),
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'deletedAt': value.deletedAt,
        'archivedAt': value.archivedAt,
        'locks': value.locks === undefined ? undefined : ((value.locks as Array<any>).map(LockForPublicToJSON)),
        'requirePassword': value.requirePassword,
        'joinRules': PublicLockJoinRulesToJSON(value.joinRules),
    };
}

