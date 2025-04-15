import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const signupData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log('User Signup Data:', JSON.stringify(signupData));

    // Reset form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center min-h-screen bg-gray-50 font-sans">
      {/* Uber Logo at the top */}
      <div className="mb-4 justify-left flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="h-5"
        />
      </div>

      {/* Form container with border */}
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md border border-black">
        {/* Form Header */}
        <h2 className="text-center text-2xl font-semibold text-black mb-6">User Signup</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-black">What's your name</label>
            <div className="flex space-x-2 mt-1">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-1/2 px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-black">What's your email</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-black">Enter Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-900 transition"
          >
            Sign Up
          </button>

          {/* Already have an account? */}
          <p className="text-center text-black text-sm mt-2">
            Already have an account?{' '}
            <Link to="/userlogin" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
