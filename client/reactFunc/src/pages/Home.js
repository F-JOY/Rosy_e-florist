import { useState,useEffect } from "react";
import Slider from "../component/slider";

import Text from "../component/text";
import Rates from "../component/rates";
export default function Home(props){
    const [bouquetsLiked, setBouquetLiked] = useState(props.bouquets.filter(bouquet => bouquet.like === true));

    useEffect(() => {
      
     
      }, [bouquetsLiked]);
       
    return(
        <>
        <Slider/> 
        <div className="section-devider"></div>
        <Text/>
        <div className="section-devider"></div>
        <Rates/>
        </>
    );

}