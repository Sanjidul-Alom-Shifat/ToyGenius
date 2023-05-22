// import React from 'react';

const Banner = () => {

    return (

        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-gray-300 bg-opacity-75"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left  ">
                    <h1 className="text-3xl font-bold sm:text-5xl">
                        <span className='text-transparent font-bold  bg-clip-text bg-gradient-to-r  from-orange-500 to-orange-600'>ToyGenius</span> Wonderland
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                    Unleash Your Child<span>&#39;</span>s Genius at ToyGenius: Discover a World of Imagination and Fun!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-gradient-to-r from-orange-300 to-amber-300 px-12 py-3 text-sm font-medium text-black shadow sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;