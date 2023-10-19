import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={chef.picture} alt="Profile Picture" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{chef.name}</div>
          <p className="text-gray-700 text-base">
            Years of Experience: {chef.years_of_experience}
          </p>
          <p className="text-gray-700 text-base">
            Number of Recipes: {chef.number_of_recipes}
          </p>
          <p className="text-gray-700 text-base">
            Likes: {chef.likes}
          </p>
          <button className='bg-primary text-white rounded my-2 px-3 py-2 text-sm'><Link to={`/chefs/${chef.id}`}>View Recipes  Button</Link></button>
        </div>
      </div>
    );
};

export default Chef;