export const Screen2 = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md"> {/* This is the main card container */}
        <div className="flex items-center justify-center mb-6 text-white">
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

        <h1 className="text-white text-3xl font-bold text-center mb-4">
          Let's get started
        </h1>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6" // Added mb-6 for spacing below input
          maxLength="16"
          // disabled
        />
        <button
          
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Continue
        </button>
      </div>
    </div>
  );
};