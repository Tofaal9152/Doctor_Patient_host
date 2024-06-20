import React from "react";
// Adding Style.js and assets
import backgroundImage from "../../assets/bgImage.jpg";
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";
import Left_Sidebar from "./Left_Sidebar/Left_Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
const LandingPage = () => {
  const Open_doctor_sidebar = useSelector(
    (state) => state.counter.Open_doctor_sidebar
  );
  return (
    <div
      className="interfont w-full h-screen overflow-hidden object-cover bg-left z-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full sticky top-0 glass z-10">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="flex relative">
        <div className="md:block hidden">
          <Left_Sidebar />
        </div>
        <Outlet />
      </div>
      <div
        className={`${
          Open_doctor_sidebar ? "left-0" : "left-[-45rem]"
        } absolute md:hidden block top-[4rem] glass h-screen w-[full]  sidebar duration-500  `}
      >
        <Left_Sidebar />
      </div>
    </div>
  );
};

export default LandingPage;
