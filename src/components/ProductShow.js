import React from "react";

import Button from "../components/Button";
import MONEY from "../assets/images/money.png";
import STAR from "../assets/images/star.png";

const ProductShow = ({
  children,
  className = "",
  link = "",
  value = "",
  ...props
}) => {
  // eslint-disable-next-line eqeqeq
  if (value == "price") {
    return (
      <div className="grid grid-cols-4 gap-x-[20px]">
        {children.map((item) => (
          <a href={link} key={item.name}>
            <div className="flex flex-col gap-y-[20px]">
              <div>
                <img src={item.image} alt={item.name}></img>
              </div>
              <div>
                <div className="flex gap-x-[15px]">
                  <img src={item.seller} alt={item.name}></img>
                  <div className="flex flex-col text-left">
                    <h1 className="font-secondaryFont font-bold text-[22px] text-[#424242]">
                      {item.name}
                    </h1>
                    <div className="flex items-center gap-x-[5px]">
                      <img src={MONEY} alt="Money"></img>
                      <p className="font-secondaryFont font-bold text-[22px] text-[#FFB30E]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="bg-[#E4F1D8] text-[#79B93C] text-[22px] font-secondaryFont font-bold h-[42px] w-[127px]">
                  Mua ngay
                </Button>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-4 gap-x-[20px]">
        {children.map((item) => (
          <a href={link} key={item.name}>
            <div className="flex flex-col gap-y-[20px]">
              <div>
                <img src={item.image} alt={item.name}></img>
              </div>
              <div>
                <div className="flex gap-x-[15px]">
                  <img src={item.seller} alt={item.name}></img>
                  <div className="flex flex-col text-left">
                    <h1 className="font-secondaryFont font-bold text-[22px] text-[#424242]">
                      {item.name}
                    </h1>
                    <div className="flex items-center gap-x-[5px]">
                      <img src={STAR} alt="Star"></img>
                      <p className="font-secondaryFont font-bold text-[22px] text-[#FFB30E]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="bg-[#E4F1D8] text-[#79B93C] text-[22px] font-secondaryFont font-bold h-[42px] w-[127px]">
                  Mua ngay
                </Button>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
};

export default ProductShow;
