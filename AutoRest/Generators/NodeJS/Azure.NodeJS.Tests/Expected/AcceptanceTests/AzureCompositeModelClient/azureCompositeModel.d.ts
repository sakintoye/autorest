/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

declare class AzureCompositeModel {
    /**
     * @class
     * Initializes a new instance of the AzureCompositeModel class.
     * @constructor
     *
     * @param {credentials} credentials - Gets Azure subscription credentials.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: ServiceClientCredentials, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    subscriptionId: string;

    acceptLanguage: string;

    longRunningOperationRetryTimeout: number;

    generateClientRequestId: boolean;

    // Operation groups
    basicOperations: operations.BasicOperations;
    primitive: operations.Primitive;
    arrayModel: operations.ArrayModel;
    dictionary: operations.Dictionary;
    inheritance: operations.Inheritance;
    polymorphism: operations.Polymorphism;
    polymorphicrecursive: operations.Polymorphicrecursive;

            /**
         * @summary Product Types
         *
         * The Products endpoint returns information about the Uber products offered
         * at a given location. The response includes the display name and other
         * details about each product, and lists the products in the proper display
         * order.
         *
         * @param {string} resourceGroupName Resource Group ID.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        list(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogArray>): void;
        list(resourceGroupName: string, callback: ServiceCallback<models.CatalogArray>): void;

        /**
         * @summary Create products
         *
         * Resets products.
         *
         * @param {string} subscriptionId Subscription ID.
         * 
         * @param {string} resourceGroupName Resource Group ID.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.productDictionaryOfArray] Dictionary of Array of
         * product
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        create(subscriptionId: string, resourceGroupName: string, options: { productDictionaryOfArray? : { [propertyName: string]: models.Product[] }, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogDictionary>): void;
        create(subscriptionId: string, resourceGroupName: string, callback: ServiceCallback<models.CatalogDictionary>): void;

        /**
         * @summary Update products
         *
         * Resets products.
         *
         * @param {string} subscriptionId Subscription ID.
         * 
         * @param {string} resourceGroupName Resource Group ID.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {array} [options.productArrayOfDictionary] Array of dictionary of
         * products
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        update(subscriptionId: string, resourceGroupName: string, options: { productArrayOfDictionary? : { [propertyName: string]: models.Product }[], customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CatalogArray>): void;
        update(subscriptionId: string, resourceGroupName: string, callback: ServiceCallback<models.CatalogArray>): void;
}

export = AzureCompositeModel;