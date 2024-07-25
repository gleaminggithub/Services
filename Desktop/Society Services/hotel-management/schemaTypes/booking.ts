import { defineField } from 'sanity';

const booking = {
  name: 'booking', // The internal name of this document type
  title: 'Booking', // The human-readable title of this document type
  type: 'document', // Specifies that this schema defines a document type
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }], // References a document of type 'user'
      validation: Rule => Rule.required(), // Validation rule to ensure this field is required
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Hotel Room',
      type: 'reference',
      to: [{ type: 'hotelRoom' }], // References a document of type 'hotelRoom'
      validation: Rule => Rule.required(), // Validation rule to ensure this field is required
    }),
    defineField({
      name: 'checkinDate',
      title: 'Check-in Date',
      type: 'date', // A date field for storing the check-in date
      validation: Rule => Rule.required(), // Validation rule to ensure this field is required
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Check-out Date',
      type: 'date', // A date field for storing the check-out date
      validation: Rule => Rule.required(), // Validation rule to ensure this field is required
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Number of Days',
      type: 'number', // A number field for storing the number of days of the booking
      initialValue: 1, // The initial value for this field
      validation: Rule => Rule.required().min(1), // Validation rule to ensure this field is required and has a minimum value of 1
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number', // A number field for storing any discount applied to the booking
      initialValue: 0, // The initial value for this field
      validation: Rule => Rule.required().min(0), // Validation rule to ensure this field is required and has a minimum value of 0
    }),
    defineField({
      name: 'adults',
      title: 'Adults',
      type: 'number', // A number field for storing the number of adults in the booking
      initialValue: 1, // The initial value for this field
      validation: Rule => Rule.required().min(1), // Validation rule to ensure this field is required and has a minimum value of 1
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'number', // A number field for storing the number of children in the booking
      initialValue: 0, // The initial value for this field
      validation: Rule => Rule.required().min(0), // Validation rule to ensure this field is required and has a minimum value of 0
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number', // A number field for storing the total price of the booking
      initialValue: 0, // The initial value for this field
      validation: Rule => Rule.required().min(0), // Validation rule to ensure this field is required and has a minimum value of 0
    }),
  ],
};

export default booking;
