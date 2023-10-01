import React from "react";
import P1 from "../assets/images/p1.png";
import Button from "../components/Button";
import STAR from "../assets/images/star.png";
import { Link } from "react-router-dom";

const ProductShow = ({
  children = [],
  className = "",
  link = "",
  value = "",
  nums = undefined,
  ...props
}) => {
  if (nums) {
    children = children?.slice(0, 8);
  }
  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  // eslint-disable-next-line eqeqeq
  if (value == "price") {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gr gap-x-[20px] gap-y-[20px]`}
      >
        {children?.map((item) => (
          <Link
            to={`/product/${item._id}`}
            key={item._id}
            className="max-w-[342.25px]"
          >
            <div className="flex flex-col  gap-y-[20px] bg-[#FCFCEE] rounded-[16px] p-3 ">
              <div>
                {item.HinhAnh[0] ? (
                  <img
                    src={item.HinhAnh[0]}
                    alt={item.TenSp}
                    className="rounded-[16px] w-[343px] h-[290px]"
                  ></img>
                ) : (
                  <img
                    src={item.HinhAnh}
                    alt={item.TenSp}
                    className="rounded-[16px] w-[343px] h-[290px]"
                  ></img>
                )}
              </div>
              <div>
                <div className="flex gap-x-[15px]">
                  <img src={P1} alt={item.TenSp}></img>
                  <div className="flex flex-col text-left">
                    <h1 className="font-secondaryFont font-bold text-[22px] text-[#424242]">
                      {item.TenSp}
                    </h1>
                    <div className="flex items-center gap-x-[5px]">
                      <p className="font-secondaryFont font-bold text-[22px] text-[#FFB30E]">
                        {intToVND(item.Gia)} VND
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
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px]">
        {children.map((item) => (
          <a href={link} key={item.TenSp}>
            <div className="flex flex-col gap-y-[20px] bg-[#FCFCEE] rounded-[16px] p-3">
              <div>
                <img
                  src={item.HinhAnh}
                  alt={item.TenSp}
                  className="w-[343px] h-[290px]"
                ></img>
              </div>
              <div>
                <div className="flex gap-x-[15px]">
                  <img src={item.seller} alt={item.TenSp}></img>
                  <div className="flex flex-col text-left">
                    <h1 className="font-secondaryFont font-bold text-[22px] text-[#424242]">
                      {item.TenSp}
                    </h1>
                    <div className="flex items-center gap-x-[5px]">
                      <img src={STAR} alt="Star"></img>
                      <p className="font-secondaryFont font-bold text-[22px] text-[#FFB30E]">
                        {item.Gia}
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
