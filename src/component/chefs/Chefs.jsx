import React from 'react';
import Chef from './Chef';

const Chefs = ({ chefs }) => {
    console.log(chefs)
    return (
        <div className='my-6'> 
            <h3 className='text-center font-bold text-4xl'>Meet Our Chef</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    chefs.map(chef => <Chef chef={chef} key={chef.id}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;