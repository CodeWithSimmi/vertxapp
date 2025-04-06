import React, { useEffect, useState } from "react";
import "./List.css";
import Gridcard from "../Gridcard/Grid";

const Card = ({ searchQuery }:any) => {
  const [products, setProducts] = useState([]);
  const [switchtoggle, setswitchtoggle] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products");
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // console.log(false?"1":0);

  useEffect(() => {
    // fetchData()
    //   .then((res) => {
    //     setProducts(res.products || []);
    //   })
    //   .catch((err) => {
    //     console.error("Error setting products:", err);
    //   });
  }, []);

  
  return (
    <div className="menu-card">
      <div className="">
        {/* <h3>Product Data</h3> */}
        {/* <button onClick={() => setswitchtoggle(!switchtoggle)}>
          {switchtoggle ? "list" : "grid"}
        </button> */}
      </div>

      
    </div>
  );
};

export default Card;