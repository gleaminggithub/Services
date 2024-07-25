import { defineField } from "sanity";

const verificationToken = {
    name: 'verification-token', // Internal name for this document type
    title: 'Verification Token', // Human-readable title for this document type
    type: 'document', // Specifies that this is a document type
    fields: [
        defineField({
            name: 'identifier', // Internal name for this field
            title: 'Identifier', // Display name for this field
            type: 'string', // Data type for this field
            description: 'The unique identifier for the verification token', // Optional description
        }),
        defineField({
            name: 'token', // Internal name for this field
            title: 'Token', // Display name for this field
            type: 'string', // Data type for this field
            description: 'The actual verification token', // Optional description
        }),
        defineField({
            name: 'expires', // Internal name for this field
            title: 'Expires', // Display name for this field
            type: 'datetime', // Data type for this field
            description: 'The expiration date and time for the token', // Optional description
        }),
    ],
};

export default verificationToken;
