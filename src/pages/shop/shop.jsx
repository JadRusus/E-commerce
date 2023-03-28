import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { SingleProduct } from "./product";
import { Categories } from "../../components/categories";
import "./shop.css";

export const Shop = () => {
  const { fulldata, selectCat, closePopup, popup, selectedId } =
    useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>FunHub Hunter</h1>
        <div className="categories">
          <Categories />
        </div>
        <div className="products">
          {fulldata.map((value, index) => {
            if (selectCat === "all") {
              return <SingleProduct data={value} key={index} />;
            } else if (value.category === selectCat) {
              return <SingleProduct data={value} key={index} />;
            } else return <></>;
          })}
        </div>
        {/*start popup*/}
        <div>
          {popup ? (
            <div>
              <div
                className="popup"
                style={{ top: Math.max(0, window.scrollY) }}
              >
                <div className="popup-header">
                  <h1>popup</h1>
                  <h1 onClick={() => closePopup()}>x</h1>
                </div>
                <div>
                  <p>{fulldata[selectedId - 1].id}</p>
                  <p>{fulldata[selectedId - 1].title}</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/*end popup*/}
      </div>
    </div>
  );
};
