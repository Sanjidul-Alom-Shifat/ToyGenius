// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import UseTitle from "../../Hook/UseTitle";
import { Link } from "react-router-dom";


const MyToys = () => {

    UseTitle('My Toys');
    // let serial = 0;
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    const [sortOrder, setSortOrder] = useState("");


    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        fetch(`https://toy-genius-server-side.vercel.app/mytoys?sellerEmail=${user?.email}&sortOrder=${sortOrder}`)
            .then((response) => response.json())
            .then((data) => {
                setToys(data);
            })
    }, [user?.email, control,sortOrder]);


    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete toy details');
        if (proceed) {
            fetch(`https://toy-genius-server-side.vercel.app/singletoys/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.message === 'Toy deleted successfully') {
                        setControl(!control);
                        toast.success('Toy deleted successfully');
                        console.log(result);
                    } else {
                        toast.error('Failed to delete toy');
                    }
                })
                .catch((error) => {
                    console.error('Error deleting toy:', error);
                    toast.error('Failed to delete toy');
                });
        }
    };



    return (
        <div className="mt-3 md:mt-5 lg:mt-10">

            <h2 className="text-center bg-gradient-to-r from-orange-400 to-orange-200 font-bold font-sans text-transparent bg-clip-text lg:text-3xl text-xl md:text-2xl mb-4 md:mb-6 lg:mb-8">My Toys List</h2>
            {/* Buttons for sorting */}
            <div className="flex justify-end mb-4 mx-2 lg:mx-6">
                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="px-4 py-2 mr-2 bg-gradient-to-r from-orange-200 to-amber-200 text-sm font-medium text-black shadow rounded"
                >
                    <option value="">Sort Order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
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
                            <th scope="col" className="px-6 py-3">
                                Update Details
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Delete Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => (
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
                                        <Link to={`/toy/${toy._id}`}>
                                            <button
                                                className="block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">
                                                Update Details
                                            </button>
                                        </Link>
                                        {/* <Modal toy={toy} HandleToyUpdate={HandleToyUpdate} showModal={showModal} closeModal={closeModal}></Modal> */}
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* <!-- Modal toggle --> */}
                                        <button
                                            onClick={() => handleDelete(toy?._id)}
                                            className="block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">
                                            Delete Details
                                        </button>
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

export default MyToys;