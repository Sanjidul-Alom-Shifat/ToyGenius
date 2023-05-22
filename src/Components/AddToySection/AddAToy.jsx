import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import UseTitle from '../../Hook/UseTitle';

const AddAToy = () => {

    UseTitle('Add A Toy')
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data ,event) => {
        event.preventDefault();
        console.log(data)
        fetch('https://toy-genius-server-side.vercel.app/posttoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                toast.success('Toy Added Successfully');
            });
        event.target.reset();
    };
    return (
        <div className='mx-2 lg:mx-6'>
            <h2 className='text-center bg-gradient-to-r from-orange-400 to-orange-200 font-bold font-sans text-transparent bg-clip-text lg:text-3xl text-xl md:text-2xl mb-4 md:mb-6 lg:mb-8'>Adding Toy From </h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="md:flex md:justify-between mt-0 md:mt-3 md:gap-5 md:items-center">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Seller Name :</label>
                        <input
                            required
                            placeholder="Enter Seller Name"
                            defaultValue={user?.displayName}
                            className="input mt-2  input-bordered  w-full"
                            {...register("sellerName")}
                        />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Seller Email :</label>
                        <input
                            required
                            placeholder="Enter Seller Email"
                            defaultValue={user?.email}
                            className="input mt-2  input-bordered  w-full"
                            {...register("sellerEmail")}
                        />
                    </div>
                </div>
                <div className="w-full mt-3 ">
                    <label className="text-xl  font-semibold">Seller Image Url :</label>
                    <input
                        required
                        placeholder="Enter Seller Photo URL"
                        defaultValue={user?.photoURL}
                        className="input  mt-2 input-bordered  w-full"
                        {...register("sellerImage")}
                    />
                </div>
                <div className="md:flex md:justify-between mt-0 md:mt-3 md:gap-5 md:items-center">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Toy Name :</label>
                        <input
                            required
                            placeholder="Enter Toy Name"
                            className="input mt-2  input-bordered  w-full"
                            {...register("toyName")}
                        />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Category :</label>
                        <select
                            required
                            className="input mt-2 input-bordered  w-full"
                            {...register("category")}
                        >
                            <option value="educational">Educational Toys</option>
                            <option value="learning">Learning Toys</option>
                            <option value="engineering">Engineering Toys</option>
                        </select>
                    </div>
                </div>

                <div className="md:flex md:justify-between mt-0 md:mt-3 md:gap-5 md:items-center">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Toy Image Url :</label>
                        <input
                            required
                            placeholder="Enter Toy Photo URL"
                            className="input  mt-2 input-bordered  w-full"
                            {...register("toyImage")}
                        />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Price :</label>
                        <input
                            type='number'
                            required
                            placeholder="Enter Toy Price"
                            className="input mt-2  input-bordered  w-full"
                            {...register("price")}
                        />
                    </div>

                </div>
                <div className="md:flex md:justify-between mt-0 md:mt-3 md:gap-5 md:items-center">
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Available Quantity :</label>
                        <input
                            required
                            placeholder="Enter Toy Quantity"
                            className="input mt-2 input-bordered  w-full"
                            {...register("quantity")}
                        />
                    </div>
                    <div className="md:w-1/2 w-full mt-3 md:mt-0">
                        <label className="text-xl  font-semibold">Rating :</label>
                        <input
                            required
                            placeholder="Enter Toy Rating"
                            className="input mt-2 input-bordered  w-full"
                            {...register("rating")}
                        />
                    </div>

                </div>
                <div className="w-full mt-3">
                    <label className="text-xl  font-semibold">Toy Description :</label>
                    <textarea
                        required
                        placeholder="Enter Toy Description"
                        className="input mt-2 input-bordered  w-full h-20"
                        {...register("description")}
                    />
                </div>
                <div className="w-full text-center mt-5">
                    <input
                        className="rounded cursor-pointer bg-gradient-to-r from-orange-300 to-amber-300 px-12 py-3 text-sm font-medium hover:font-bold text-black shadow"
                        value="Add Toy"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;