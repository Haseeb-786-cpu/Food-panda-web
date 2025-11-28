import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Delivery(){
    const data = useLoaderData();

    return(
        <div className="text-center m-4 bg-slate-900 text-white p-4 text-3x">Delivery Services: {data.followers}
        <img className="text-center" src={data.avatar_url} alt="Git picture" width={300} />
         </div>
    )
}

export default Delivery;

export const deliveryInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}