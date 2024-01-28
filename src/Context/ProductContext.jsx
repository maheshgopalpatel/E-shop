import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const ProductContext = ({ children }) => {
  // states for taking array for main data and filter;
  let [productsList, setProductsList] = useState([]);
  // let [filteredList, setFilteredList] = useState([]);

  //function for api calling
  async function getData() {
    let res = await axios(
      "https://api.kalpav.com/api/v1/product/category/retail"
    );
    let data = await res.data.response;
    console.log(data);
    setProductsList(data);
  }

 const clickHandler =(items)=>{

 }

  useEffect(() => {
    getData();
  }, []);

  return (
    <GlobalContext.Provider value={{ productsList, clickHandler }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ProductContext;
