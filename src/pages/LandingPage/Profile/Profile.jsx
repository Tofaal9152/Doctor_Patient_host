import React, { useState } from "react";
import Avater from "../../../assets/doctor_Logo.png";
import { LuCamera } from "react-icons/lu";

const Profile = () => {
  const [image, setImage] = useState(Avater);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center bg-white">
      <form className="mt-[3rem]">
        <div className="flex flex-col items-center p-3 px-4 space-y-2">
          <div className="object-cover relative flex items-end justify-center space-y-2">
            <img
              className="object-cover w-[4.5rem] h-[4.5rem] rounded-full ring-2 ring-[#53829C] cursor-pointer"
              src={image}
              alt="Avatar"
            />
            <div className="absolute bottom-0 right-0">
              <div className="relative z-10">
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="p-1 bg-[#53829C] rounded-full">
                    <LuCamera size={20} className="text-white" />
                  </div>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="opacity-0 hidden absolute top-0 left-0 w-full h-full cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 w-[30rem] grid-cols-1 gap-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-md font-semibold text-gray-900"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="first_name"
                value="Md Tofaal Ahmed"
                className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>

            <div className="flex gap-2">
              <div className="">
                <label
                  htmlFor="Age"
                  className="block mb-2 text-sm font-md font-semibold text-gray-900"
                >
                  Age
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  value="20"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="Age"
                  className="block mb-2 text-sm font-md font-semibold text-gray-900"
                >
                  Gender
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  value="Male"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-md font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  value="01732-243-108"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-md font-semibold text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                placeholder="tofaal9152@gmail.com"
                value="tofaal9152@gmail.com"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-[#53829C] hover:bg-[#497791] rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white">
                Update profile
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
