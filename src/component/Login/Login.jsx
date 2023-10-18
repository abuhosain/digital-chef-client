import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="  mt-4 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg border shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg"
                 placeholder='Enter Your Email'
                 
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg"
                 placeholder='Enter Your Password'
                required
              />
            </div>
  
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <h3>If you new please <Link to="/register"><span className='underline text-primary'>Register</span></Link></h3>
          <div className='flex items-center gap-5'>
            <div className="flex items-center cursor-pointer"><FaGithub className='relative'/><span className='ms-1'>GitHub</span></div>
            <div className="flex items-center cursor-pointer"><FaGoogle className='relative'/><span className='ms-1'>Google</span></div>
          </div>
        </div>
      </div>
    );
};

export default Login;