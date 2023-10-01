import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import CART from "../assets/images/cart.png";
import Button from "../components/Button";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

import USER from "../assets/svg/user.svg";

const Header = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [showmenu, setShowMenu] = useState(false);
  const _idUser = localStorage.getItem("_id");
  const navigate = useNavigate();
  useEffect(() => {
    if (name !== "") {
      setName(name);
    }
  }, [name]);

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setName(null);
    navigate("/");
  };

  return (
    <header className="h-[108px] w-full bg-gray-100 xl:fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between h-full md:flex ">
        <Link to="/home">
          <img src={LOGO} alt="Logo"></img>
        </Link>
        <div className="flex items-center pr-3 gap-x-4">
          <a href="/cart">
            <img srcSet={`${CART} 3.5x`} alt="Cart"></img>
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
                } pl-5 pr-5 pt-3 pb-3 mt-[5px] rounded-[8px] text-center absolute right-0 flex flex-col items-center justify-center bg-white`}
              >
                <div className="flex items-center min-h-[40px]">
                  <h1 className="text-[#FFB800] w-max font-primaryFont font-bold">
                    Hi {name}
                  </h1>
                </div>
                <Link to={`/user/${_idUser}`}>
                  <button className=" text-[#FFB800] w-max h-[40px] font-primaryFont font-bold ">
                    Tài khoản
                  </button>
                </Link>
                <Link to="/post">
                  <button className=" text-[#FFB800] w-max h-[40px] font-primaryFont font-bold text-center">
                    Đăng bài
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className=" text-[#FFB800] w-max min-h-[40px] font-primaryFont font-bold "
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <a href="/login" alt="Login">
              <Button className="h-[46px] w-[142px] text-[#FFB800] font-primaryFont font-bold gap-1 rounded-[8px] shadow-linearColor1 bg-white hover:bg-[#FFB800] hover:text-white transition-all ease-in-out duration-300">
                Đăng nhập
              </Button>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
