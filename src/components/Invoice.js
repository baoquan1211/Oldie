import { React, useState, useEffect } from "react";

import ARROW from "../assets/svg/arrow.svg";

const Invoice = ({ totalPrice }) => {
  const shippingFee = 40000;

  const [totalPay, setTotalPay] = useState(() => {
    return totalPrice + shippingFee;
  });

  useEffect(() => {
    setTotalPay(() => {
      return totalPrice + shippingFee;
    });
  }, [totalPrice]);

  return (
    <div className="flex flex-col bg-[#FAFAF5] w-[430px] p-[24px] gap-y-[20px] rounded-[24px]">
      <h1 className="font-primaryFont text-[20px] font-semibold">Hóa đơn</h1>
      <div className="flex justify-between text-[16px] font-primaryFont mt-[10px]">
        <h2>Thành tiền</h2>
        <h2>{totalPrice}</h2>
      </div>
      <div className="flex justify-between text-[16px] font-primaryFont">
        <h2>Phí vận chuyển</h2>
        <h2>{shippingFee}</h2>
      </div>
      <div className="flex justify-center gap-x-[16px] items-center ">
        <input
          placeholder="Mã giảm giá"
          className="input-form rounded-[8px] w-[250px] h-[40px] bg-[#F5F5F5] font-primaryFont text-[18px] text-[#9E9E9E] pl-[16px]"
        ></input>
        <button className="h-[41px] w-[82px] rounded-[8px] bg-linearBtnBg text-[18px] text-white font-secondaryFont font-bold ">
          Sử dụng
        </button>
      </div>
      <div className="flex justify-between text-[16px] font-primaryFont font-bold">
        <h2>Tổng tiền</h2>
        <h2>{totalPay}</h2>
      </div>
      <div className="flex justify-center mt-[10px]">
        <button className="h-[48px] w-[380px] rounded-[8px] bg-linearBtnBg text-[18px] text-white font-secondaryFont font-bold ">
          <div className="flex justify-between items-center pr-[16px] pl-[16px]">
            <h2>Thanh toán</h2>
            <img src={ARROW} alt="arrow"></img>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Invoice;
