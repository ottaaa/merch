/* tslint:disable */
/* eslint-disable */
/**
 * 物販(仮) Document
 * 物販(仮) の API リファレンスです
 *
 * The version of the OpenAPI document: 0.0.1
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
 * @interface ResponseItemDtoItem
 */
export interface ResponseItemDtoItem {
    /**
     * 
     * @type {number}
     * @memberof ResponseItemDtoItem
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ResponseItemDtoItem
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ResponseItemDtoItem
     */
    price: number;
    /**
     * 
     * @type {Date}
     * @memberof ResponseItemDtoItem
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ResponseItemDtoItem
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the ResponseItemDtoItem interface.
 */
export function instanceOfResponseItemDtoItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ResponseItemDtoItemFromJSON(json: any): ResponseItemDtoItem {
    return ResponseItemDtoItemFromJSONTyped(json, false);
}

export function ResponseItemDtoItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseItemDtoItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'price': json['price'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ResponseItemDtoItemToJSON(value?: ResponseItemDtoItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'price': value.price,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}

