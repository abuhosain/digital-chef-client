import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 bg-black flex justify-center items-center'>
            <div className=' text-white grid md:grid-cols-3 gap-10'>
                <div className="main p-6">
                    <h2 className='text-6xl text-lime-500'>DigitalChef</h2>
                    <h2 className='text-4xl mt-3 mb-3'>The Best Restaurants in Your Home</h2>
                    <p className='text-xl'>Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.</p>
                </div>
                <div className="menu p-6">
                    <h2 className='text-6xl  font-light'>Menu</h2>
                    <h3 className='mt-3 text-3xl text-orange-300'>Home</h3>
                    <h3 className='mt-3 text-3xl text-orange-300'>About Us</h3>
                    <h3 className='mt-3 text-3xl text-orange-300'>Contact Us</h3>
                    <h3 className='mt-3 text-3xl text-orange-300'>Restaurants</h3>
                </div>
                <div className="contact p-6">
                    <h1 className='text-6xl'>Contact</h1>
                    <h3 className='my-4'>Location:
                        1717 Harrison St, San Francisco, CA 94103, United States
                    </h3>
                    <hr />
                    <h3 className='my-3'>Email: digitalchef@gmail.com</h3>
                    <h2>Ceil: +88013*****</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;