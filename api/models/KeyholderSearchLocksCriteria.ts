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
import type { SharedLocksCriteriaData } from './SharedLocksCriteriaData';
import {
    SharedLocksCriteriaDataFromJSON,
    SharedLocksCriteriaDataFromJSONTyped,
    SharedLocksCriteriaDataToJSON,
} from './SharedLocksCriteriaData';

/**
 * 
 * @export
 * @interface KeyholderSearchLocksCriteria
 */
export interface KeyholderSearchLocksCriteria {
    /**
     * 
     * @type {SharedLocksCriteriaData}
     * @memberof KeyholderSearchLocksCriteria
     */
    sharedLocks?: SharedLocksCriteriaData;
}

/**
 * Check if a given object implements the KeyholderSearchLocksCriteria interface.
 */
export function instanceOfKeyholderSearchLocksCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeyholderSearchLocksCriteriaFromJSON(json: any): KeyholderSearchLocksCriteria {
    return KeyholderSearchLocksCriteriaFromJSONTyped(json, false);
}

export function KeyholderSearchLocksCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyholderSearchLocksCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sharedLocks': !exists(json, 'sharedLocks') ? undefined : SharedLocksCriteriaDataFromJSON(json['sharedLocks']),
    };
}

export function KeyholderSearchLocksCriteriaToJSON(value?: KeyholderSearchLocksCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sharedLocks': SharedLocksCriteriaDataToJSON(value.sharedLocks),
    };
}

