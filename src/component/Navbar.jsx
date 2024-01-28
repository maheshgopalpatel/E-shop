import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/image/search-icon.png";
import searchButton from "../assets/image/icon.png";
import { GlobalContext } from "../Context/ProductContext";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {

const [value, setValue]= useState("")
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Product", href: "/", current: false },
    { name: "About", href: "/", current: false },
  ];

  const searchHandler=(e)=>{
    setValue(...value, e.target.value)
  }
  const {productsList, clickHandler} = useContext(GlobalContext);
console.log(productsList);
  return (
    <>
      <nav className=" flex justify-evenly items-center">
        <div>
          <img
            src={
              "http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
            }
            art=""
            className=" h-20"
          />
        </div>
        <div className="flex justify-between items-center">
          {navigation.map((item) => {
            return (
              <div className="">
                <Link
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-lg max-sm:text-base font-medium hover:cursor-pointer"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" relative ">
          <input
            type="text"
            placeholder="Search Product.."
            value={""}
            onChange={(e) => {
              searchHandler(e);
            }}
            className=" bg-transparent py-2 pl-10 pr-2 border-2 rounded-lg border-orange-400 focus:border-orange-400"
          />
          <img
            src={searchIcon}
            alt="search-icon"
            className=" absolute h-8 top-3 left-2"
          />
          <button onClick={clickHandler}>
            <img src={searchButton} alt="search icon"  className=" h-8 relative top-3 -right-1" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
