import React from "react";
import { Link, useLocation } from "react-router-dom";


interface NavbarMenuType{

  title : string;
  href : string;
}

export const menus: NavbarMenuType[] = [
  {
    title: "Home",
    href: "/",
  },
 
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Infrastructure",
    href: "/infratecture",
  },
  {
    title: "Quality Policy",
    href: "/quality-policy",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

 const NavbarMenu: React.FC = () => {
   const location = useLocation()
  return (
    <div className="hidden md:flex gap-6  ">
      {menus.map((menu, idx) => {
        return (
          <React.Fragment  key={`MENU_INDEX_${idx}`}>
            <Link
              to={menu.href}
              className={`cursor-pointer ${location.pathname === menu.href ? "text-blue-900 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-900"}   `}
            >
              <p className="hover:text-blue-900 ">{menu.title}</p>
            </Link>
          </React.Fragment>
        );
      })}
    </div>      
  );
};  

export default NavbarMenu;
