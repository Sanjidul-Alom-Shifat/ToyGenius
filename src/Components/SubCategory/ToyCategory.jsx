// import React from 'react';

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const Categories = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [activeToy, setActiveToy] = useState('learning');

    useEffect(() => {
        fetch(`https://toy-genius-server-side.vercel.app/alltoys/${activeToy}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
                console.log(data);
            });
    }, [activeToy]);

    const handleTabClick = (tabName) => {
        setActiveToy(tabName);
    };

    const handleViewDetails = () => {
        if (!user) {
            toast.error('You have to log in first to view details');
        } else {
            // Perform the action to view details
        }
    };


    return (
        <div className="mb-10 mt-7 md:mt-8 lg:mt-12">
            <h3 className="text-center font-semibold text-2xl lg:text-3xl mb-4 lg:mb-7 font-Marcellus">
                Toys Sub-Categories
            </h3>
            <div className="flex mx-auto justify-center mb-10">
                <div
                    onClick={() => handleTabClick("learning")}
                    className={` mx-3  font-bold  text-base  cursor-pointer cricket ${activeToy === "learning"
                        ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow"
                        : ""
                        }`}
                >
                    Learning Toy
                </div>
                <div
                    onClick={() => handleTabClick("engineering")}
                    className={`mx-3  font-bold  text-base cursor-pointer football ${activeToy === "engineering" ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow" : ""
                        }`}
                >
                    Engineering Toy
                </div>
                <div
                    onClick={() => handleTabClick("educational")}
                    className={` mx-3 font-bold  text-base  cursor-pointer  badminton ${activeToy === "educational" ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow" : ""
                        }`}
                >
                    Educational Toy
                </div>
            </div>
            <div className="grid grid-cols-1 mx-4  md:grid-cols-2 lg:grid-cols-3 md:mx-6 lg:mx-8 gap-10">
                {toys.map((toy) => (
                    <div className="card full bg-base-100 shadow-xl">
                        <figure>
                            <img src={toy.toyImage} className="w-full h-60" alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Name : {toy.toyName}
                            </h2>
                            <p className="text-lg font-semibold">Price : $ {toy.price}</p>
                            <p className="text-lg font-semibold">Ratings : {toy.rating} star</p>
                            <Link to={`/alltoy/${toy._id}`}>
                                <div className="card-actions w-full justify-center mt-2">
                                    <button onClick={handleViewDetails} className="block w-full rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">View Details</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;


