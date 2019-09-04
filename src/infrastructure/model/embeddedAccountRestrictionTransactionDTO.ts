/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountRestrictionModificationDTO } from './accountRestrictionModificationDTO';
import { AccountRestrictionTransactionBodyDTO } from './accountRestrictionTransactionBodyDTO';
import { AccountRestrictionTypeEnum } from './accountRestrictionTypeEnum';
import { EmbeddedTransactionDTO } from './embeddedTransactionDTO';
import { EntityTypeEnum } from './entityTypeEnum';

export class EmbeddedAccountRestrictionTransactionDTO {
    /**
    * Public key of the signer account.
    */
    'signer': string;
    /**
    * Version of the entity. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
    */
    'version': number;
    'type': EntityTypeEnum;
    'maxFee': Array<number>;
    'deadline': Array<number>;
    'propertyType': AccountRestrictionTypeEnum;
    'modifications': Array<AccountRestrictionModificationDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signer",
            "baseName": "signer",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EntityTypeEnum"
        },
        {
            "name": "maxFee",
            "baseName": "max_fee",
            "type": "Array<number>"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "Array<number>"
        },
        {
            "name": "propertyType",
            "baseName": "propertyType",
            "type": "AccountRestrictionTypeEnum"
        },
        {
            "name": "modifications",
            "baseName": "modifications",
            "type": "Array<AccountRestrictionModificationDTO>"
        }    ];

    static getAttributeTypeMap() {
        return EmbeddedAccountRestrictionTransactionDTO.attributeTypeMap;
    }
}

