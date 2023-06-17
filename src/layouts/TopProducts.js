import React from "react";
import ProductShow from "../components/ProductShow";

import IP12PM128GB from "../assets/images/ip12pm128.png";
import P1 from "../assets/images/p1.png";
import MORE from "../assets/svg/more.svg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Product_Items = [
  {
    TenSp: "Iphone 12promax 128GB",
    Gia: "21",
    seller: P1,
    HinhAnh: IP12PM128GB,
  },
  {
    TenSp: "Iphone 12promax 128GB",
    Gia: "21",
    seller: P1,
    HinhAnh: IP12PM128GB,
  },
  {
    TenSp: "Iphone 12promax 128GB",
    Gia: "21",
    seller: P1,
    HinhAnh: IP12PM128GB,
  },
  {
    TenSp: "Iphone 12promax 128GB",
    Gia: "21",
    seller: P1,
    HinhAnh: IP12PM128GB,
  },
];

const TopProducts = () => {
  const navigate = useNavigate();

  const seeAllHandle = () => {
    navigate("/search");
  };

  return (
    <section className="h-[1274px]">
      <div className="wrapper text-center mt-[80px]">
        <div>
          <h1 className="font-secondaryFont font-bold text-[43px] text-[#212121]">
            Sản phẩm nổi bật
          </h1>
        </div>
        <div className="mt-[80px]">
          <ProductShow value="star">{Product_Items}</ProductShow>
        </div>
        <div className="mt-[80px]">
          <ProductShow value="star">{Product_Items}</ProductShow>
        </div>
        <div className="mt-[40px] flex justify-center items-center">
          <Button
            onClick={seeAllHandle}
            className="bg-[#F59500] w-[198px] h-[60px] text-[18px] font-secondaryFont font-bold text-white hover:bg-[#FFAD2D] active:bg-[#F09303]"
          >
            Xem tất cả
            <img src={MORE} alt="More"></img>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
