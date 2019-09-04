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
 * The version of the OpenAPI document: 0.7.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BlockDTOAllOf } from './blockDTOAllOf';
import { EntityDTO } from './entityDTO';
import { VerifiableEntityDTO } from './verifiableEntityDTO';

export class BlockDTO {
    'signature': string;
    'signerPublicKey': string;
    /**
    * Entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
    */
    'version': number;
    'type': number;
    'height': Array<number>;
    'timestamp': Array<number>;
    'difficulty': Array<number>;
    /**
    * Fee multiplier applied to transactions contained in block.
    */
    'feeMultiplier': number;
    'previousBlockHash': string;
    'transactionsHash': string;
    'receiptsHash': string;
    'stateHash': string;
    'beneficiaryPublicKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "signerPublicKey",
            "baseName": "signerPublicKey",
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
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "Array<number>"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Array<number>"
        },
        {
            "name": "difficulty",
            "baseName": "difficulty",
            "type": "Array<number>"
        },
        {
            "name": "feeMultiplier",
            "baseName": "feeMultiplier",
            "type": "number"
        },
        {
            "name": "previousBlockHash",
            "baseName": "previousBlockHash",
            "type": "string"
        },
        {
            "name": "transactionsHash",
            "baseName": "transactionsHash",
            "type": "string"
        },
        {
            "name": "receiptsHash",
            "baseName": "receiptsHash",
            "type": "string"
        },
        {
            "name": "stateHash",
            "baseName": "stateHash",
            "type": "string"
        },
        {
            "name": "beneficiaryPublicKey",
            "baseName": "beneficiaryPublicKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BlockDTO.attributeTypeMap;
    }
}

