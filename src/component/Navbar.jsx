import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/image/search-icon.png";
import searchButton from "../assets/image/icon.png";
import { GlobalContext } from "../Context/ProductContext";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const [value, setValue] = useState({ text: "" });
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Product", href: "/", current: false },
    { name: "About", href: "/", current: false },
  ];

  const searchHandler = (e) => {
    setValue({ ...value.text, text: e.target.value });
  };

  addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
       
        clickHandler(value.text);
      
    }
  });
  const {clickHandler } = useContext(GlobalContext);
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
                      ? "bg-orange-400 text-white"
                      : "text-orange-500 hover:bg-orange-400 hover:text-white",
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
            value={value.text}
            onChange={(e) => {
              searchHandler(e);
            }}
            className=" bg-transparent py-2 pl-10 pr-2 border-2 rounded-lg border-orange-400 focus:border-orange-400"
          />
          <img
            src={searchIcon}
            alt="search-icon"
            className=" absolute h-8 top-2 left-2"
          />
          <button
            onClick={() => {
              clickHandler(value.text);
            }}
            className="absolute top-[.4rem] -right-9"
          >
            <img
              src={searchButton}
              alt="search icon"
              className=" h-8 "
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
