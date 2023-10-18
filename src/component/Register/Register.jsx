import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
        <h2 className="text-2xl font-semibold mb-4">Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Enter Your name'

              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Photo Url:
            </label>
            <input
              type="text"
              id="phot"
              name="phot"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder='Enter Your phot url'

              required
            />
          </div>
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
        <h3> If Already have an account please <Link to="/login"><span className='underline text-primary'>Login</span></Link></h3>
      </div>
    </div>
  );
};

export default Register;