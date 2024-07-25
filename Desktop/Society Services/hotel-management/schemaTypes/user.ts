import { defineField } from 'sanity';

// Define the "user" schema
const user = {
    name: 'user', // Internal name of the document type
    title: 'User', // Human-readable title of the document type
    type: 'document', // Specifies that this schema defines a document type
    fields: [
        // Define the "isAdmin" field
        defineField({
            name: 'isAdmin',
            title: 'Is Admin',
            type: 'boolean', // Boolean field to indicate if the user is an admin
            description: 'Check if the user is admin',
            initialValue: false, // Default value is false
            validation: (Rule) => Rule.required(), // Field is required
            // readOnly: true, // Uncomment if the field should be read-only
            // hidden: true, // Uncomment if the field should be hidden
        }),
        // Define the "name" field
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string', // String field for the user's name
            description: 'Name of the user',
            readOnly: true, // Field is read-only
            validation: (Rule) => Rule.required(), // Field is required
        }),
        // Define the "image" field
        defineField({
            name: 'image',
            title: 'Image',
            type: 'url', // URL field for the user's image
            description: 'URL of the user\'s image', // Added description for clarity
        }),
        // Define the "password" field
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string', // Password fields should be of type string
            hidden: true, // Field is hidden
            description: 'Password for the user', // Added description for clarity
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string', 
        }),
         defineField({
            name: 'emailVerified',
            type: 'datetime',
            hidden:true, 
        }),
        // Define the "about" field
        defineField({
            name: 'about',
            title: 'About',
            type: 'text', // Text field for additional information about the user
            description: 'About the user',
        }),
    ],
};

// Export the "user" schema
export default user;
