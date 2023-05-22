// import React from 'react';

import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css';
import UseTitle from "../../Hook/UseTitle";

const ToyDetails = () => {

    UseTitle('Toy Details');

    const toydetails = useLoaderData();

    const {
        sellerName,
        sellerEmail,
        toyName,
        toyImage,
        price,
        quantity,
        rating,
        description
    } = toydetails;

    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 lg:mt-10">
            <div className="flex lg:flex-row flex-col items-center justify-between mx-3 lg:mx-9 md:mx-6 lg:gap-8 ">
                <div className="w-full">
                    <img src={toyImage} alt="Toy" className="h-[490px] w-full rounded-lg" />
                </div>
                <div className="w-full p-4">
                    <h2 className="text-5xl font-light  mb-2 divide-y-2">{toyName}</h2>
                    <p className="text-xl font-bold my-4">Price: ${price}</p>
                    <div className="flex items-center my-4 gap-5">
                        <Rating style={{ maxWidth: 140 }} value={Math.round(rating)} readOnly />
                        <span className="text-xl font-bold">  {Math.round(rating)} <span className="text-blue-500 text-lg font-semibold">Reviews</span></span>
                    </div>
                    <p className="my-2"><span className="text-xl font-semibold">Available Quantity</span> : <span className="text-xl font-bold">{quantity} pieces</span> </p>
                    <p className="text-xl font-semibold my-2">Seller Name : {sellerName}</p>
                    <p className="text-xl font-semibold my-2">Email : {sellerEmail}</p>
                    <div className=" my-2">
                        <p className="text-lg font-semibold">Description : </p>
                        <p className="text-base text-gray-500 text-justify">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ToyDetails;
