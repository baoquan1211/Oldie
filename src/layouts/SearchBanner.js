import React, { useState } from "react";
import "../css/Base.css";
import DELIVERY from "../assets/svg/delivery.svg";
import Button from "../components/Button";

import SEARCH_ICON from "../assets/images/search2.png";
import SEARCH_BANNER from "../assets/images/search_banner.png";
import { useNavigate, Link } from "react-router-dom";

const SearchBanner = () => {
  const [productSearch, setProductSearch] = useState("");
  const navigate = useNavigate();
  const searchHandle = () => {
    navigate(`/search/${productSearch}`);
  };
  return (
    <section className="bg-bgColor h-[587px] mt-[108px]">
      <div className="wrapper flex w-full justify-between">
        <div className="max-w-[900px] mt-[32px] ml-[32px]">
          <p className="text-white font-primaryFont text-[88px] font-bold">
            Đồ cũ giá rẻ
          </p>
          <h2 className="text-black font-primaryFont text-[22px] font-bold">
            Chắc chắn bạn sẽ tìm thấy sản phẩm ưa thích của mình tại đây
          </h2>
          <div className="grid grid-row-2 items-center bg-white h-[195px] rounded-[16px] mt-[35px]">
            <div className="justify-left flex items-center px-[24px]">
              <Link to="/cart">
                <img src={DELIVERY} alt="Delivery"></img>
              </Link>
            </div>
            <div className="justify-center flex items-center px-[24px] gap-x-2 ">
              <input
                onChange={(e) => {
                  setProductSearch(e.target.value);
                }}
                type="text"
                placeholder={"Nhập tên sản phẩm..."}
                className="input-form bg-[#F5F5F5] w-full max-w-[641px] h-[49px] rounded-[8px] p-4 font-secondaryFont text-[#9E9E9E]"
              ></input>
              <Button
                onClick={searchHandle}
                className="w-[194px] h-[60px] bg-Color2 text-[18px] font-bold font-primaryFont text-white gap-x-[10px] hover:bg-[#FFAD2D] active:bg-[#F09303]"
              >
                <img src={SEARCH_ICON} alt="Search Icon"></img>Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img src={SEARCH_BANNER} alt="Search banner"></img>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
