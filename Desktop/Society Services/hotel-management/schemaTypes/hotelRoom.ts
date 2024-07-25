import { defineField } from 'sanity';

const roomTypes = [
    { title: "Basic", value: 'basic' },
    { title: "Luxury", value: 'luxury' },
    { title: "Suite", value: 'suite' }
];

const hotelRoom = {
    name: 'hotelRoom', // Internal name of this document type
    title: 'Hotel Room', // Human-readable title of this document type
    type: 'document', // Specifies that this is a document type
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string', // Defines a string field for the room's name
            validation: Rule => Rule.required().max(50).error("Maximum 50 characters"), // Validation rule for required and maximum length
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug', // Defines a slug field for SEO-friendly URLs
            options: {
                source: 'name', // Automatically generate slug from the name field
            },
            validation: Rule => Rule.required(), // Validation rule to ensure slug is required
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text', // Defines a text field for a longer description
            validation: Rule => Rule.required().min(100).error("Minimum 100 characters"), // Validation rule for required and minimum length
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number', // Defines a number field for the room price
            validation: Rule => Rule.required().min(100).error("Minimum price is 100"), // Validation rule for required and minimum value
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number', // Defines a number field for discounts
            initialValue: 0, // Sets default value to 0
            validation: Rule => Rule.min(0), // Validation rule to ensure discount is not negative
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array', // Defines an array field for multiple images
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'url', type: 'url', title: 'URL' },
                        { name: 'file', type: 'file', title: 'File' }
                    ]
                }
            ],
            validation: Rule => Rule.required().min(2).error("At least two images are required"), // Validation rule for required and minimum number of images
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'object', // Defines an object field for the cover image
            fields: [
                { name: 'url', type: 'url', title: "URL" },
                { name: 'file', type: 'file', title: 'File' }
            ],
            validation: Rule => Rule.required().error("Cover Image is required"), // Validation rule to ensure cover image is provided
        }),
        defineField({
            name: 'type',
            title: 'Room Type',
            type: 'string', // Defines a string field for the room type
            options: {
                list: roomTypes // Provides a list of predefined options for room type
            },
            initialValue: 'basic', // Sets default value to 'basic'
            validation: Rule => Rule.required(), // Validation rule to ensure room type is selected
        }),
        defineField({
            name: 'specialNote',
            title: 'Special Note',
            type: 'text', // Defines a text field for special notes about the room
            validation: Rule => Rule.required(), // Validation rule to ensure special note is provided
            initialValue: 'Check-in time is 12:00 PM, checkout time is 11:50 AM. If you have left behind any items, please contact the receptionist.'
        }),
        defineField({
            name: 'dimension',
            title: 'Dimension',
            type: 'string', // Defines a string field for the room dimensions
        }),
        defineField({
            name: 'numberOfBeds',
            title: 'Number Of Beds',
            type: 'number', // Defines a number field for the number of beds
            validation: Rule => Rule.min(1), // Validation rule to ensure at least 1 bed
            initialValue: 1, // Sets default value to 1
        }),
        defineField({
            name: 'offeredAmenities',
            title: 'Offered Amenities',
            type: 'array', // Defines an array field for multiple amenities
            of: [
                {
                    type: "object",
                    fields: [
                        { name: 'icon', title: 'Icon', type: 'string' }, // Field for the icon representing the amenity
                        { name: 'amenity', title: 'Amenity', type: 'string' } // Field for the description of the amenity
                    ],
                },
            ],
        }),
        defineField({
            name: 'isBooked',
            title: "Is Booked",
            type: 'boolean', // Defines a boolean field for booking status
            initialValue: false, // Sets default value to false
        }),
        defineField({
            name: 'isFeatured',
            title: "Is Featured",
            type: 'boolean', // Defines a boolean field for featuring status
            initialValue: false, // Sets default value to false
        }),
        defineField({
            name: 'reviews',
            title: "Reviews",
            type: 'array', // Defines an array field for multiple reviews
            of: [
                { type: 'review' } // References a document type 'review'
            ]
        }),
    ]
};

export default hotelRoom;
