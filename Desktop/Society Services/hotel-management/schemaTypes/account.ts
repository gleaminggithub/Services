import { defineField } from "sanity";

const account = {
    name: 'account', // The internal name of this document type
    title: 'Account', // The human-readable title of this document type
    type: 'document', // Specifies that this schema defines a document type
    fields: [
        // Define the "providerType" field
        defineField({
            name: 'providerType',
            type: 'string', // A string field to store the type of provider (e.g., 'google', 'facebook')
        }),
        // Define the "providerId" field
        defineField({
            name: 'providerId',
            type: 'string', // A string field to store the unique identifier of the provider
        }),
        // Define the "providerAccountId" field
        defineField({
            name: 'providerAccountId',
            type: 'string', // A string field to store the account ID associated with the provider
        }),
        // Define the "refreshToken" field
        defineField({
            name: 'refreshToken',
            type: 'string', // A string field to store the refresh token issued by the provider
        }),
        // Define the "accessToken" field
        defineField({
            name: 'accessToken',
            type: 'string', // A string field to store the access token issued by the provider
        }),
        // Define the "accessTokenExpires" field
        defineField({
            name: 'accessTokenExpires',
            type: 'number', // A number field to store the expiration timestamp of the access token
        }),
        // Define the "user" field
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference', // A reference field to link to a document of type 'user'
            to: { type: 'user' } // Specifies the type of document to reference
        }),
    ]
};

export default account;
