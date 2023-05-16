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
 * @interface IncreaseMaxLimitDateDto
 */
export interface IncreaseMaxLimitDateDto {
    /**
     * The new maximum limit date
     * @type {Date}
     * @memberof IncreaseMaxLimitDateDto
     */
    maxLimitDate: Date;
    /**
     * Whether the maximum limit date should be disabled
     * @type {boolean}
     * @memberof IncreaseMaxLimitDateDto
     */
    disableMaxLimitDate: boolean;
}

/**
 * Check if a given object implements the IncreaseMaxLimitDateDto interface.
 */
export function instanceOfIncreaseMaxLimitDateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "maxLimitDate" in value;
    isInstance = isInstance && "disableMaxLimitDate" in value;

    return isInstance;
}

export function IncreaseMaxLimitDateDtoFromJSON(json: any): IncreaseMaxLimitDateDto {
    return IncreaseMaxLimitDateDtoFromJSONTyped(json, false);
}

export function IncreaseMaxLimitDateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncreaseMaxLimitDateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxLimitDate': (new Date(json['maxLimitDate'])),
        'disableMaxLimitDate': json['disableMaxLimitDate'],
    };
}

export function IncreaseMaxLimitDateDtoToJSON(value?: IncreaseMaxLimitDateDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxLimitDate': (value.maxLimitDate.toISOString()),
        'disableMaxLimitDate': value.disableMaxLimitDate,
    };
}
