import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import {authOptions} from '../../../libs/auth';
import {createBooking, getRoom, updateHotelRoom} from '../../../libs/apis';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

type RequestData ={
    checkinDate:string;
    checkoutDate:string;
    adults:number;
    children:number;
    numberOfDays:number;
    hotelRoomSlug:string;
}

export async function POST(req:Request , res:Response){
    const {checkinDate,checkoutDate,adults,children,numberOfDays,hotelRoomSlug}:RequestData = await req.json();

    if(!checkinDate || !checkoutDate || !adults  || !numberOfDays || !hotelRoomSlug){
        return new NextResponse("Please all fields are required",{status:400})
    }

    // const origin =req.headers.get('origin');
    console.log("AuthOption:",authOptions);
    const session =await getServerSession(authOptions);
    console.log("Line 29/Stripe",session);
    if(!session){
        return new NextResponse("Authentication required",{status:401})
    }
    console.log("Line 33/Stripe",session);
    // const userId = session.user.id;
    console.log("Line 35/Stripe",session.user);
    const formattedCheckoutDate=checkoutDate.split('T')[0];
    const formattedCheckinDate=checkinDate.split('T')[0];
    try{
        const room =await getRoom(hotelRoomSlug);
        const discount = room.price - (room.price/100)*room.discount;
        const totalPrice = discount * numberOfDays;
        const message= "Successful";

       await createBooking({
        adults: adults,
        checkinDate:formattedCheckinDate,
        checkoutDate:formattedCheckoutDate,
        children: children,
        hotelRoom:room._id,
        numberOfDays: numberOfDays,
        discount: discount,
        totalPrice: totalPrice,
        user:session.user.id,
      });

      //   Update hotel Room
      await updateHotelRoom(room._id);
    console.log('successfull payment');
      return NextResponse.json({session,completed:true}, {
        status: 200,
        statusText: 'Booking Successful',
      });


    }catch(err:any){
        console.log('Payment Failed',err);
        return NextResponse.json({err,completed:false}, {
            status: 200,
            statusText: 'Booking UnSuccessful',
          });
    }
}

