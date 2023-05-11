import React from "react";

import IP12PM128GB from "../assets/images/ip12pm128.png";
import P1 from "../assets/images/p1.png";
import ProductShow from "../components/ProductShow";

const Product_Items = [
  {
    name: "Iphone 12promax 128GB",
    value: "13.300.000",
    seller: P1,
    image: IP12PM128GB,
  },
  {
    name: "Iphone 12promax 128GB",
    value: "13.300.000",
    seller: P1,
    image: IP12PM128GB,
  },
  {
    name: "Iphone 12promax 128GB",
    value: "13.300.000",
    seller: P1,
    image: IP12PM128GB,
  },
  {
    name: "Iphone 12promax 128GB",
    value: "13.300.000",
    seller: P1,
    image: IP12PM128GB,
  },
];

const NewPost = () => {
  return (
    <section className="h-[640px] bg-white mt-[80px]">
      <div className="wrapper justify-center text-center">
        <h1 className="font-secondaryFont font-bold text-[43px]">
          Bài viết mới đăng
        </h1>
        <div className="mt-[40px]">
          <ProductShow value="price">{Product_Items}</ProductShow>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
