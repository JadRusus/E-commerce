import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

//finding the categories
export const Categories = () => {
  const { fulldata, onCatFilter } = useContext(ShopContext);
  let category = [];
  for (let i = 0; i < fulldata.length; i++) {
    category.indexOf(fulldata[i].category) === -1
      ? category.push(fulldata[i].category)
      : console.log();
  }
  return (
    <ul>
      <li>
        <button id="all" onClick={() => onCatFilter("all")}>
          All
        </button>
      </li>
      <li>
        <button id="men" onClick={() => onCatFilter(category[0])}>
          {category[0]}
        </button>
      </li>
      <li>
        <button id="women" onClick={() => onCatFilter(category[3])}>
          {category[3]}
        </button>
      </li>
      <li>
        <button id="electronics" onClick={() => onCatFilter(category[2])}>
          {category[2]}
        </button>
      </li>
      <li>
        <button id="jewelery" onClick={() => onCatFilter(category[1])}>
          {category[1]}
        </button>
      </li>
    </ul>
  );
};
