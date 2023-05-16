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
 * @interface CreateCodeRepDto
 */
export interface CreateCodeRepDto {
    /**
     * 
     * @type {string}
     * @memberof CreateCodeRepDto
     */
    combinationId: string;
}

/**
 * Check if a given object implements the CreateCodeRepDto interface.
 */
export function instanceOfCreateCodeRepDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "combinationId" in value;

    return isInstance;
}

export function CreateCodeRepDtoFromJSON(json: any): CreateCodeRepDto {
    return CreateCodeRepDtoFromJSONTyped(json, false);
}

export function CreateCodeRepDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCodeRepDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'combinationId': json['combinationId'],
    };
}

export function CreateCodeRepDtoToJSON(value?: CreateCodeRepDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'combinationId': value.combinationId,
    };
}
