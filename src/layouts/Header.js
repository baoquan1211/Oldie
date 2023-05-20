import React from "react";
import LOGO from "../assets/images/logo.png";
import SEARCH from "../assets/images/search.png";
import CART from "../assets/images/cart.png";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="h-[108px] bg-gray-100 w-full fixed top-0 left-0">
      <div className="wrapper flex items-center h-full justify-between ">
        <a href="/">
          <img src={LOGO} alt="Logo"></img>
        </a>
        <div className="flex items-center">
          <a href="/">
            <img src={SEARCH} alt="Search"></img>
          </a>
          <a href="/cart">
            <img src={CART} alt="Cart"></img>
          </a>
          <a href="/login" alt="Login">
            <Button className="h-[46px] w-[142px] text-[#FFB800] font-primaryFont font-bold gap-1 rounded-[8px] shadow-linearColor1 bg-white">
              Đăng nhập
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
