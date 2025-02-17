import React, { useState } from "react";
import { useForm } from "react-hook-form";
import backgroundImage from "../../assets/bgImage.jpg";
import Avater from "../../assets/doctor_Logo.png";
import { AiFillCamera } from "react-icons/ai";

import { LuCamera } from "react-icons/lu";

const Patient_Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const triggerFileInput = () => {
    document.getElementById("changeImg").click();
  };
  const onSubmit = (data) => {
    console.log(data);
  };
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
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="interfont flex flex-col items-center justify-center h-screen bg-cover"
    >
      <div className="bg-opacity-65 flex flex-col items-center rounded-md border border-[#c5d8e2] shadow-2xl backdrop-filter backdrop-blur-sm py-3 sm:p-3 space-y-6">
        {/* From */}
        <div className="w-full p-5 sm:p-10">
          <form
            className=" w-full "
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-3xl font-semibold text-[#538296] text-center mb-4">
              Log In
            </h1>
            <div className="flex flex-col space-y-4">
              {/* Email */}
              <div className="relative z-0">
                <input
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              {/* Password */}
              <div className="relative z-0">
                <input
                  type="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("Password", { required: true })}
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="">
              <input
                className="bg-[#53829C] mt-[2rem] hover:bg-[#497791] rounded-md w-full px-2 py-1 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
                disabled={isSubmitting}
                type="submit"
                value="Log in"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Patient_Registration;
