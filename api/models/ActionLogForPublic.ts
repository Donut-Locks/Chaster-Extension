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
import type { UserForPublic } from './UserForPublic';
import {
    UserForPublicFromJSON,
    UserForPublicFromJSONTyped,
    UserForPublicToJSON,
} from './UserForPublic';

/**
 * 
 * @export
 * @interface ActionLogForPublic
 */
export interface ActionLogForPublic {
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    type: string;
    /**
     * 
     * @type {object}
     * @memberof ActionLogForPublic
     */
    payload: object;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    lock: string;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    role: ActionLogForPublicRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    extension?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    color: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ActionLogForPublic
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    icon: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActionLogForPublic
     */
    prefix: string;
    /**
     * 
     * @type {UserForPublic}
     * @memberof ActionLogForPublic
     */
    user?: UserForPublic;
}


/**
 * @export
 */
export const ActionLogForPublicRoleEnum = {
    User: 'user',
    Keyholder: 'keyholder',
    Extension: 'extension',
    Admin: 'admin'
} as const;
export type ActionLogForPublicRoleEnum = typeof ActionLogForPublicRoleEnum[keyof typeof ActionLogForPublicRoleEnum];


/**
 * Check if a given object implements the ActionLogForPublic interface.
 */
export function instanceOfActionLogForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "payload" in value;
    isInstance = isInstance && "lock" in value;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "prefix" in value;

    return isInstance;
}

export function ActionLogForPublicFromJSON(json: any): ActionLogForPublic {
    return ActionLogForPublicFromJSONTyped(json, false);
}

export function ActionLogForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionLogForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['_id'],
        'type': json['type'],
        'payload': json['payload'],
        'lock': json['lock'],
        'role': json['role'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
        'title': json['title'],
        'description': json['description'],
        'color': json['color'],
        'createdAt': (new Date(json['createdAt'])),
        'icon': json['icon'],
        'prefix': json['prefix'],
        'user': !exists(json, 'user') ? undefined : UserForPublicFromJSON(json['user']),
    };
}

export function ActionLogForPublicToJSON(value?: ActionLogForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_id': value.id,
        'type': value.type,
        'payload': value.payload,
        'lock': value.lock,
        'role': value.role,
        'extension': value.extension,
        'title': value.title,
        'description': value.description,
        'color': value.color,
        'createdAt': (value.createdAt.toISOString()),
        'icon': value.icon,
        'prefix': value.prefix,
        'user': UserForPublicToJSON(value.user),
    };
}

