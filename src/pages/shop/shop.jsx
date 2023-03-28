import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { SingleProduct } from "./product";
import { Categories } from "../../components/categories";
import { AiFillCloseCircle } from "react-icons/ai";
import "./shop.css";

export const Shop = () => {
  const { fulldata, selectCat, closePopup, popup, selectedId, addToCart } =
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
                  <h1>{fulldata[selectedId - 1].title}</h1>
                  <h1 id="closebtn" onClick={() => closePopup()}>
                    <AiFillCloseCircle size={32} />
                  </h1>
                </div>
                <div className="popup-content">
                  <div className="popup-content-left">
                    <img
                      src={fulldata[selectedId - 1].image}
                      alt={fulldata[selectedId - 1].title}
                    />
                  </div>
                  <div className="popup-content-right">
                    <h3>{fulldata[selectedId - 1].title}</h3>

                    <p>
                      Rating: <b>{fulldata[selectedId - 1].rating.rate}</b> out
                      of 5 | <b>{fulldata[selectedId - 1].rating.count}</b>{" "}
                      Reviews
                    </p>
                    <h4>Price: ${fulldata[selectedId - 1].price}</h4>
                    <h4>Products Details:</h4>
                    <p>{fulldata[selectedId - 1].description}</p>
                    <button
                      className="addToCartBttn"
                      onClick={() => addToCart(fulldata[selectedId - 1].id)}
                    >
                      Add to Cart
                    </button>
                  </div>
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
