import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import CART from "../assets/images/cart.png";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

import USER from "../assets/svg/user.svg";

const Header = () => {
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const [showmenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (name !== "") {
      setName(name);
    }
  }, [name]);

  const logout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("_id");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    setName(null);
    navigate("/");
  };

  return (
    <header className="h-[108px] bg-gray-100 w-full fixed top-0 left-0 z-50">
      <div className="wrapper flex items-center h-full justify-between">
        <Link to="/home">
          <img src={LOGO} alt="Logo"></img>
        </Link>
        <div className="flex items-center">
          <a href="/cart">
            <img src={CART} alt="Cart"></img>
          </a>

          {name !== null ? (
            <div className="relative">
              <button
                onClick={() => {
                  setShowMenu(!showmenu);
                }}
              >
                <img src={USER} alt="user"></img>
              </button>
              <div
                className={`${
                  showmenu ? "" : "hidden"
                } w-[142px] mt-[5px] h-[160px] rounded-[8px] text-center absolute right-0 flex flex-col items-center justify-center bg-white`}
              >
                <div className="flex items-center h-[40px]">
                  <h1 className="text-[#FFB800] font-primaryFont font-bold">
                    Hi {name}
                  </h1>
                </div>
                <Link to="/post">
                  <button className=" text-[#FFB800] h-[40px] font-primaryFont font-bold text-center text">
                    Đăng bài
                  </button>
                </Link>
                <button className=" text-[#FFB800] h-[40px] font-primaryFont font-bold ">
                  Bài đã đăng
                </button>
                <button
                  onClick={logout}
                  className=" text-[#FFB800] h-[40px] font-primaryFont font-bold "
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <a href="/login" alt="Login">
              <Button className="h-[46px] w-[142px] text-[#FFB800] font-primaryFont font-bold gap-1 rounded-[8px] shadow-linearColor1 bg-white">
                Đăng nhập
              </Button>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
