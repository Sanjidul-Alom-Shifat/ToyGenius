// import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import UseTitle from '../../Hook/UseTitle';

const UpdateToys = () => {

    UseTitle('Update Toy Details')
    const id = useParams();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data , event) => {
        console.log(data);
        event.preventDefault();
        fetch(`https://toy-genius-server-side.vercel.app/updatetoy/${data.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success('Toy Details Updated Successfully');
            });
        event.target.reset();
    };
    return (
        <div className='mt-3 md:mt-5 lg:mt-10 mx-4'>
            <h2 className="text-center bg-gradient-to-r from-orange-400 to-orange-200 font-bold font-sans text-transparent bg-clip-text lg:text-3xl text-xl md:text-2xl mb-4 md:mb-6 lg:mb-8">Update Toy Details</h2>

            <div className='bg-slate-200 mt-6 lg:mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-4 md:p-7 rounded-lg shadow-2xl  dark:border-y-8 dark:bg-gray-800 dark:border-gray-700'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>

                    <div>
                        <label className="block mb-3 text-lg font-medium text-gray-900 dark:text-white">Toy price :</label>
                        <div className="input_group ">
                            <input
                                type='number'
                                placeholder='Enter toy price'
                                className="input_text"
                                required
                                {...register("price")}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-3 mt-5 text-lg font-medium text-gray-900 dark:text-white">Available quantity :</label>
                        <div className="input_group ">
                            <input
                                required
                                placeholder="Enter toy quantity"
                                className="input_text"
                                {...register("quantity")}
                            />
                        </div>
                    </div >
                    <div>
                        <label className="block mb-3 mt-5 text-lg font-medium text-gray-900 dark:text-white">Detaila description :</label>
                        <div className="input_group ">
                            <textarea
                                placeholder="Enter toy description"
                                required
                                className="input_text"
                                {...register("description")}
                            />
                        </div>
                    </div>



                    <div className="lg:w-1/2 w-full hidden">
                        <input
                            placeholder="Type here"
                            value={id.id}
                            className="input mt-2 mr-6 input-bordered input-accent w-full"
                            {...register("id")}
                        />
                    </div>

                    <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>
                    <div className="w-full text-center my-5">
                        <input
                            className="rounded w-full cursor-pointer bg-gradient-to-r from-orange-300 to-amber-300 px-12 py-3 text-sm font-medium hover:font-bold text-black shadow"
                            value="Update Toy Details"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );

};
export default UpdateToys;

