import React from "react";

import FEATURE1 from "../assets/images/feature_1.png";
import FEATURE2 from "../assets/images/feature_2.png";
import FEATURE3 from "../assets/images/feature_3.png";

const Feature_Items = [
  {
    title1: "Giá cả",
    title2: "hợp lý",
    image: FEATURE1,
  },
  {
    title1: "Theo dõi",
    title2: " trực tiếp",
    image: FEATURE2,
  },
  {
    title1: "Giao hàng",
    title2: "nhanh chóng",
    image: FEATURE3,
  },
];

const Feature = () => {
  return (
    <section className="h-[456px] bg-[#FEEFD0] flex items-center justify-center">
      <div
        className="w-[1230px] h-[246px] bg-white rounded-[46px] flex items-center justify-center
       gap-x-[95px]"
      >
        {Feature_Items.map((item) => (
          <div
            className="flex items-center justify-center gap-x-[15px]"
            key={item.title1}
          >
            <div>
              <img src={item.image} alt={item.title}></img>
            </div>
            <div>
              <h1 className="text-[#FE9501] font-secondaryFont text-[35px] font-bold">
                {item.title1}
              </h1>
              <h1 className="text-[#FE9501] font-secondaryFont text-[35px] font-bold">
                {item.title2}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
