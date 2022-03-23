import React from "react";
//horizontal
const Kotak = () => {
  return (
    <div className="mt-2">
      <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
        <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Full Name</div>
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input placeholder="First Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " />
            </div>
          </div>
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input placeholder="Last Name.." className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pb-4 mb-4">
        <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
          Address
          <div className="text-xs font-normal leading-none text-gray-500">Input address</div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row">
            <select className="mx-2 flex-1 h-10 mt-2 form-select w-full">
              <option value="US">US</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="China">China</option>
            </select>
            <div className="w-full flex-1 mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input placeholder="State" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " />{" "}
              </div>
            </div>
            <div className="w-full flex-1 mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input placeholder="Zip Code" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " />
              </div>
            </div>
          </div>
          <div className="m-2">
            <div className="w-full flex-1">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input placeholder="Address" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-64 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
        <div className="flex-1 flex flex-col md:flex-row">
          <button
            className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kotak;
