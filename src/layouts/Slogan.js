import React from "react";

import LOCATION from "../assets/images/location.png";
import PRODUCT from "../assets/images/product.png";
import PAYMENT from "../assets/images/payment.png";

const Slogan = () => {
  return (
    <section className="h-[518px] bg-linearBg3 mt-[80px] mb-[80px]">
      <div className="grid grid-rows-2 items-center justify-center font-secondaryFont font-bold text-[43px] text-Color2">
        <div className="mt-[80px] mb-[80px] flex justify-center">
          <h1>Nhanh chóng - Thuận tiện</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={PRODUCT} alt="Location"></img>
            </div>
            <div className="block items-center justify-center text-center">
              <h2 className="font-secondaryFont text-[22px] font-bold text-[#434343]">
                Chọn sản phẩm
              </h2>
              <p className="font-primaryFont text-[18px] font-normal text-[#9E9E9E]">
                Tìm kiếm hàng ngàn sản phẩm cũ đang được đăng bán
              </p>
            </div>
          </div>
          <div className="items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={LOCATION} alt="Location"></img>
            </div>
            <div className="block items-center justify-center text-center">
              <h2 className="font-secondaryFont text-[22px] font-bold text-[#434343]">
                Chọn địa điểm
              </h2>
              <p className="font-primaryFont text-[18px] font-normal text-[#9E9E9E]">
                Chọn địa điểm mà bạn muốn giao sản phẩm
              </p>
            </div>
          </div>
          <div className="items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={PAYMENT} alt="Location"></img>
            </div>
            <div className="block items-center justify-center text-center">
              <h2 className="font-secondaryFont text-[22px] font-bold text-[#434343]">
                Thanh toán
              </h2>
              <p className="font-primaryFont text-[18px] font-normal text-[#9E9E9E]">
                Nhiều cách thức thanh toán Nhanh chóng, an toàn, đơn giản
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
