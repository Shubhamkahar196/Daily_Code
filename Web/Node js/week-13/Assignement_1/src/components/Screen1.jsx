import React from 'react';
import { Screen2 } from './Screen2';

export const Screen1 = () => {
  return (
    // Main container for the page, centered with dark blue background
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4">
      {/* Card-like container for the verification form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Webinar.gg logo/title */}
        <div className="flex items-center justify-center mb-6 text-white">
          {/* SVG icon re-added here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4"
            />
          </svg>
          <span className="text-2xl font-semibold">Webinar.gg</span>
        </div>

        {/* Page title */}
        <h1 className="text-white text-3xl font-bold text-center mb-4">
          Verify Your Age
        </h1>

        {/* Information text */}
        <p className="text-gray-400 text-center mb-6 text-sm">
          Please confirm your birth year. This data will not be stored.
        </p>

        {/* Age verification form - simplified for design */}
        <div className="space-y-6">
          {/* Birth Year input field */}
          <div>
            <label htmlFor="birthYear" className="block text-gray-300 text-sm font-medium mb-2">
              Your Birth Year
            </label>
            <input
              type="text"
              id="birthYear"
              name="birthYear"
              placeholder="YYYY"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength="4"
              inputMode="numeric"
            //   disabled 
            />
          </div>

          {/* Continue button */}
          <button
          
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
           
            onClick={Screen2}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};