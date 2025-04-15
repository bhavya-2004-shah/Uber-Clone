import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Uber</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">🌐 EN</span>
          <Link to="/userlogin" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
            Have an account?
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-between px-12">
        {/* Left Side Text */}
        <div className="max-w-md">
          <h2 className="text-5xl font-bold mb-6">Drive with Uber</h2>
          <p className="text-lg mb-6">Make money on your schedule</p>
          <div className="flex items-center space-x-4">
            <Link to="/usersignup" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Sign up now
            </Link>
            <Link to="/userlogin" className="underline text-sm hover:text-gray-300">
              Already have an account? Sign in
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src="https://images.creativemarket.com/0.1.0/ps/1770162/1160/773/m1/fpnw/wm0/light_0821sw-.jpg?1476715631&s=67822c1105236471ecad9b38594fc3f4"
            alt="Driver illustration"
            className="w-[900px] max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
