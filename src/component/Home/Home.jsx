import React from 'react';
import Chefs from '../chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData()
    // console.log(chefs)
    return (
        <div className="md:mx-40">
            {/* banner section */}
            <div className="bg-gray-800 md:py-16">
                <div className="container mx-auto grid md:grid-cols-2 items-center justify-center bg-gray-800">
                    {/* Text on the left */}
                    <div className="md:w-1/2 w-full text-white md:ps-4">
                        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                        <p className="mt-4 text-lg">Discover amazing content and more.</p>
                        <button className="mt-6 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-semibold">Get Started</button>
                    </div>

                    {/* Image on the right */}
                    <div className="w-3/4">
                        <img src="/public/delivery-boy.png" alt="Banner Image" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
        {/* chefs section */}
        <Chefs chefs={chefs}></Chefs>
        </div>
    );
};

export default Home;