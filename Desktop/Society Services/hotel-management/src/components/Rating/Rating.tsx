import {FC} from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

type Props ={
    rating : number;
}


const Rating : FC<Props>=({rating})=>{
    const fullStars = Math.floor(rating);
    const decimalPart= rating-fullStars;

    const fullStartElements =Array(fullStars).fill(<FaStar/>);
    let halfStartElements=null;
    if(decimalPart>0){
        halfStartElements=<FaStarHalf/>
    }
    return <>
    {fullStartElements} {halfStartElements}
    </>
}


export default Rating;