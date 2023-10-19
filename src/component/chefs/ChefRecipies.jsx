import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipies = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails)
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-4">
                {/* Chef Card */}
                <div className="bg-white rounded-lg shadow-lg p-4">
                    {/* Chef Image */}
                    <img src={chefDetails.picture} alt="Chef Name" className="w-32 h-32 mx-auto rounded-full mb-4" />

                    {/* Chef Name and Years of Experience */}
                    <h1 className="text-2xl font-semibold text-center">{chefDetails.name}</h1>
                    <p className="text-gray-500 text-center">Years of Experience: {chefDetails.years_of_experience}</p>

                    {/* Recipe and Likes Count */}
                    <div className="flex justify-center space-x-4 mt-4">
                        <div>
                            <p className="text-lg font-semibold">Recipes</p>
                            <p className="text-gray-500">{chefDetails.number_of_recipes}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Likes</p>
                            <p className="text-gray-500">{chefDetails.likes}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-center mt-4">
                       {chefDetails.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipies;