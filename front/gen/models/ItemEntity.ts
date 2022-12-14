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
 * @interface ItemEntity
 */
export interface ItemEntity {
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    price: number;
    /**
     * 
     * @type {Date}
     * @memberof ItemEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ItemEntity
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the ItemEntity interface.
 */
export function instanceOfItemEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ItemEntityFromJSON(json: any): ItemEntity {
    return ItemEntityFromJSONTyped(json, false);
}

export function ItemEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemEntity {
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

export function ItemEntityToJSON(value?: ItemEntity | null): any {
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

