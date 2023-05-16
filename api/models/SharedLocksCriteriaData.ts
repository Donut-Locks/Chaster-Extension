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
 * @interface SharedLocksCriteriaData
 */
export interface SharedLocksCriteriaData {
    /**
     * An array of shared locks ids
     * @type {Array<string>}
     * @memberof SharedLocksCriteriaData
     */
    sharedLockIds?: Array<string>;
    /**
     * Whether the request includes locks created by wearers
     * @type {boolean}
     * @memberof SharedLocksCriteriaData
     */
    includeKeyholderLocks?: boolean;
}

/**
 * Check if a given object implements the SharedLocksCriteriaData interface.
 */
export function instanceOfSharedLocksCriteriaData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SharedLocksCriteriaDataFromJSON(json: any): SharedLocksCriteriaData {
    return SharedLocksCriteriaDataFromJSONTyped(json, false);
}

export function SharedLocksCriteriaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedLocksCriteriaData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sharedLockIds': !exists(json, 'sharedLockIds') ? undefined : json['sharedLockIds'],
        'includeKeyholderLocks': !exists(json, 'includeKeyholderLocks') ? undefined : json['includeKeyholderLocks'],
    };
}

export function SharedLocksCriteriaDataToJSON(value?: SharedLocksCriteriaData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sharedLockIds': value.sharedLockIds,
        'includeKeyholderLocks': value.includeKeyholderLocks,
    };
}

