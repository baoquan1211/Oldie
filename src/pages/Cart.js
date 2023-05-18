import React from "react";

import Header from "../layouts/Header";

import CART_IMG from "../assets/svg/bigcart.svg";
import CartForm from "../layouts/CartForm";

const Cart = () => {
  return (
    <>
      <Header></Header>
      <div className="mt-[108px] h-[150px] flex items-center justify-left gap-[36px] pl-[96px] wrapper border-b-[#E6E6E6] border-b-[2px]">
        <div>
          <img src={CART_IMG} alt="cart"></img>
        </div>
        <div>
          <h1 className="font-secondaryFont font-bold text-[88px] text-[#F59500]">
            Giỏ hàng
          </h1>
        </div>
      </div>
      <CartForm></CartForm>
    </>
  );
};

export default Cart;
