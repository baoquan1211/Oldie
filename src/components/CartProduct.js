import React, { useState, useEffect } from "react";

import LEFT from "../assets/svg/left.svg";
import RIGHT from "../assets/svg/right.svg";

const CartProduct = ({ children, pricePerId, totalPrice, setTotalPrice }) => {
  const [numProduct, setNumProduct] = useState(1);

  const plusPriceHandle = (accumulator, currentValue) => {
    return accumulator + currentValue._price;
  };

  const pricePerProduct = numProduct * parseInt(children._price);

  useEffect(() => {
    const index = pricePerId.findIndex(({ _id }) => _id === children._id);
    if (index === -1) {
      pricePerId.push({
        _id: children._id,
        _price: pricePerProduct,
      });
    } else {
      pricePerId[index]._price = pricePerProduct;
    }
    setTotalPrice(pricePerId.reduce(plusPriceHandle, 0));
    console.log(totalPrice);
  });

  /* const index = pricePerId.findIndex(({ _id }) => _id === children._id);
  if (index === -1) {
    pricePerId.push({
      _id: children._id,
      _price: pricePerProduct,
    });
  } else {
    pricePerId[index]._price = pricePerProduct;
  }
  totalPrice = pricePerId.reduce(plusPriceHandle, 0);
  console.log(totalPrice); */

  const Increase = () => {
    setNumProduct(numProduct + 1);
  };
  const Decrease = () => {
    if (numProduct > 1) {
      setNumProduct(numProduct - 1);
    }
  };

  return (
    <div className="w-[880px] h-[160px] bg-[#FAFAF5] rounded-[24px] border-[2px] border-[#E6E6E6]">
      <div className="flex">
        <div className="flex items-center w-full">
          <img
            srcSet={`${children._img} 1x`}
            alt="product_img"
            className="rounded-[24px] max-h-[156px]"
          ></img>
          <div className="ml-[30px] flex gap-y-[5px] flex-col w-full">
            <h1 className="font-primaryFont font-semibold text-[20px]">
              {children._name}
            </h1>
            <p className="font-primaryFont font-semibold text-[#426B1F]">
              {children._price} VND
            </p>
            <div className="w-[170px] h-[40px] rounded-[30px] flex items-center border-[2px] border-[#E6E6E6]">
              <div className="font-secondaryFont font-bold text-[22px] text-[#FB3C00] w-[94px] text-center">
                {numProduct}
              </div>
              <div className="w-[38px] h-[38px] flex items-center border-l-[2px] border-[#E6E6E6]">
                <button onClick={Decrease}>
                  <img src={LEFT} alt="decrease"></img>
                </button>
              </div>
              <div className="w-[38px] h-[38px] flex items-center border-l-[2px] border-[#E6E6E6]">
                <button onClick={Increase}>
                  <img src={RIGHT} alt="increase"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[26px] flex">
          <h1
            className="font-primaryFont text-[20px] font-semibold"
            id={children._id}
          >
            {pricePerProduct}đ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
