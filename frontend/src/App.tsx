import React from "react";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-6 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Note Application</h1>
        <div>
          <input
            placeholder="Title"
            type="text"
            className="w-full border-b-2 border-gray-700 outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-blue-500 text-white px-5 py-2 rounded">
            Submit
          </button>
        </div>
      </div>

      {/* Note Items */}
      <div className="bg-white shadow-md rounded p-5">
        <p className="font-semibold mb-4 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded">View</button>
          <button className="bg-gray-700 text-white p-2 rounded">Edit</button>
          <button className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-5">
        <p className="font-semibold mb-4 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded">View</button>
          <button className="bg-gray-700 text-white p-2 rounded">Edit</button>
          <button className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-5">
        <p className="font-semibold mb-4 text-gray-700 text-lg">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded">View</button>
          <button className="bg-gray-700 text-white p-2 rounded">Edit</button>
          <button className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default App;