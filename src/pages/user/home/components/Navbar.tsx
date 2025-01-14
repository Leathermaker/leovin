import React from "react";
// import logo from '../../../../assets/images/logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { NavbarMenu } from "../subComponents";
import { IoIosMenu } from "react-icons/io";
import useNavbarStore from "../../../../store/NavbarStore";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { openNavbar } = useNavbarStore();

  return (
    <div className="text-black flex justify-between items-center py-1 w-full lg:px-24 px-4 ">
      <div
        onClick={() => openNavbar()}
        className="block md:hidden bg-blue-600 p-2 rounded-md"
      >
        <IoIosMenu color="white" />
      </div>

      <div>
        <h1 className="text-red-500 font-bold text-5xl">LEO</h1>
        <p className="font-semibold text-gray-500">VINYLS</p>
      </div>

      <NavbarMenu />

      <Link to={"/contact"} className="flex items-center gap-2 ">
        <div className="bg-blue-100 h-12 aspect-square  rounded-full flex items-center justify-center z-20 relative ">
          <div className="aspect-square inset-0 bg-blue-100 border-blue-400/80 rounded-full border animate-customPing absolute -z-10" />
          <FiPhoneCall />
        </div>
        <div className="lg:block hidden">
          <h1 className="text-gray-700">Hotline 24/7</h1>
          <h1 className="">+91-181-2651732</h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
