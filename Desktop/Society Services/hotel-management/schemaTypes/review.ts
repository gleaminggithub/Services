import { defineField } from "sanity";

const review = {
    name: 'review', // Internal name for this document type
    title: 'Review', // Human-readable title for this document type
    type: 'document', // Specifies that this is a document type
    fields: [
        defineField({
            name: 'user',
            title: 'User',
            type: 'reference', // Defines a reference field to another document type
            to: [{ type: 'user' }], // Points to the 'user' document type
            validation: Rule => Rule.required(), // Validation rule to ensure the field is required
        }),
        defineField({
            name: 'hotelRoom',
            title: 'Hotel Room',
            type: 'reference', // Defines a reference field to another document type
            to: [{ type: 'hotelRoom' }], // Points to the 'hotelRoom' document type
            validation: Rule => Rule.required(), // Validation rule to ensure the field is required
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text', // Defines a text field for the review content
            validation: Rule => Rule.required(), // Validation rule to ensure the field is required
        }),
        defineField({
            name: 'userRating',
            title: 'User Rating',
            type: 'number', // Defines a number field for the user rating
            validation: Rule => Rule.required().min(1).max(5).error("Rating must be between 1 and 5"), // Validation rule for rating to be between 1 and 5
        }),
    ]
}

export default review;
