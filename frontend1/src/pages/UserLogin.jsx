import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const userdata = {
      email,
      password,
    };
    console.log('Userdata:', JSON.stringify(userdata));

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center min-h-screen bg-gray-50 font-sans">
      {/* Uber Logo above form */}
      <div className="mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
          className="h-5"
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md border border-black">
        <h2 className="text-center text-2xl font-semibold text-black mb-6">User Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-black">Enter your email</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="text-sm text-black">Enter Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-900 transition"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-black mb-2">
              New here?{' '}
              <Link to="/usersignup" className="text-blue-600 hover:underline">
                Create New Account
              </Link>
            </p>

            

            <Link
              to="/captainlogin"
              className="inline-block w-full bg-blue-600 text-white py-2 mt-2 rounded hover:bg-blue-700 transition"
            >
              Sign in as Captain
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
