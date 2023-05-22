// import React from 'react';

import { useEffect, useState } from "react";
import UseTitle from "../../Hook/UseTitle";
import { Link } from "react-router-dom";

const AllToys = () => {

    UseTitle('All Toys');
    // let serial = 0;
    // const { user } = useContext(AuthContext);
    const [alltoys, setAlltoys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://toy-genius-server-side.vercel.app/alltoys')
            .then((response) => response.json())
            .then((data) => setAlltoys(data))
    }, []);

    const handleSearch = () => {
        fetch(`https://toy-genius-server-side.vercel.app/toyname/${searchText}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setAlltoys(data);
            })
    }


    return (

        <div className="mt-3 md:mt-5 lg:mt-10">

            <h2 className="text-center bg-gradient-to-r from-orange-400 to-orange-200 font-bold font-sans text-transparent bg-clip-text lg:text-3xl text-xl md:text-2xl mb-4 md:mb-6 lg:mb-8">All Toys List</h2>

            <div className="input-group flex mb-6 justify-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Search…"
                    className="input text-center input-bordered"
                />
                <button
                    onClick={handleSearch}
                    className="block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 lg:mx-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Serial
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seller Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toy Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub-Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys?.map((toy, index) => (
                                <tr className="bg-white border-b font-semibold text-black dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4 text-center">
                                        {index + 1}
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        {/* for user image and name and email */}
                                        <img className="w-10 h-10 rounded-full" src={toy?.sellerImage} alt="Jese image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{toy?.sellerName}</div>
                                            <div className="font-normal text-gray-500">{toy?.sellerEmail}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {/* for toy name */}
                                        {toy?.toyName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* for sub-category */}
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-orange-400 mr-2"></div> {toy?.category}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* for toy price */}
                                        ${toy?.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* for toy quantity */}
                                        {toy?.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* <!-- Modal toggle --> */}
                                        <Link to={`/alltoy/${toy?._id}`}>
                                            <button className="block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">
                                                View Details
                                            </button>
                                        </Link>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>

    );
};

export default AllToys;