import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const customStyles = {
        backgroundColor: '#ffdbe1'
    }
    return (

       <div style={customStyles} className='md:py-20'>
         <div  className="lg:flex items-center p-4 md:mx-40">
            <div className="lg:w-1/2 p-4">
                <h2 className="text-7xl font-bold">Ooops..</h2>
                <h3 className='text-5xl font-bold mt-6'>Page Not Found</h3>
                <button className='btn bg-red-500 mt-6 px-6 pb-3 pt-2 hover:bg-red-600 text-white text-2xl'><Link to='/'>Plz Go Back</Link></button>
            </div>
            <div className="lg:w-1/2 text-center p-4">
                <img src="/public/error-page.png" alt="Image Description" className="max-w-full h-auto inline-block" />
            </div>
        </div>
       </div>
    );
};

export default ErrorPage;