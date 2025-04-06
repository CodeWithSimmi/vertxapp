import React from "react";
import "./Grid.css";
import { wheel,view,download,move, menu } from "../../assets";
import Image from "next/image";

const productmenu = [
  {
    menuitem: "View",
    menuimg: view,
  },

  {
    menuitem: "Download",
    menuimg: download,
  },

  {
    menuitem: "Move",
    menuimg: move,
  },
  {
    menuitem: "Move",
    menuimg: move,
  },
  {
    menuitem: "Move",
    menuimg: move,
  },
];


interface productimg {
  src:string;

}

const Gridcard = ({ product }:any) => {
  //  const {id,title} = product;

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="white-box"></div>
        <div className="product-content" key={product.id}>
          <div className="product-info">
            <Image
              className="product-img"
              src={wheel}
              alt="product img"
            />
            <span className="product-name">{product.title}</span>
          </div>
          <div className="product-menu">
            <Image
              src={menu}
              alt="product menu"
              className="menu-img"
            />

{/**Always make a parent div and it's class defined before map in case of absoult and relative */}
          <div className="hover-menu-container">

            {productmenu.map((item, index) => {
              //Always check console.log if you doubt your data isn't rendering
              console.log(item);
              return (
                <div className="hover-menu" key={index}>
                  <div className="menu">
                    <Image
                      src={item.menuimg}
                      alt={item.menuitem}
                      className="dropdrownimg"
                    />
                    
                    {item.menuitem}
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridcard;