import React, { useState } from "react";
import "../../css/Base.css";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Header from "../../layouts/Header";

import FACEBOOK from "../../assets/svg/facebook.svg";
import GOOGLE from "../../assets/svg/google.svg";
import APPLE from "../../assets/svg/apple.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [iswrong, setIsWrong] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    const item = { username, password };
    const message = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    await fetch("http://localhost:3001/auth/login", message)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          console.log(res.message);
          throw Error(res.message);
        } else {
          sessionStorage.setItem("token", res.token);
          sessionStorage.setItem("username", res.user.username);
          sessionStorage.setItem("_id", res.user._id);
          sessionStorage.setItem("name", res.user.hoten);
          navigate("/home");
        }
      })
      .catch(function (e) {
        console.log(e);
        setIsWrong(true);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="mt-[108px] wrapper flex flex-col items-center pt-[60px] pb-[60px]">
        <div className="flex flex-col w-[886px] h-[544px] ">
          <div className="text-center border-b-[2px]">
            <h1 className="font-secondaryFont font-bold text-[88px] text-[#F59500] ">
              Đăng nhập
            </h1>
          </div>
          <div className="mt-[50px] flex items-center justify-center gap-x-[100px]">
            <div className="flex flex-col gap-y-[25px]">
              <input
                placeholder="Nhập tên đăng nhập..."
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[330px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <input
                type="password"
                placeholder="Nhập mật khẩu..."
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[330px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <button
                className="w-[330px] h-[68px] rounded-[8px] mt-[20px] bg-[#F59500] hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[22px]"
                onClick={login}
              >
                Đăng nhập
              </button>
              {iswrong && (
                <h1 className="font-primaryFont text-[16px] text-red-500">
                  Sai tài khoản hay mật khẩu!!!
                </h1>
              )}
            </div>
            <div className="flex flex-col gap-y-[44px] justify-center items-center">
              <h1 className="font-primaryFont text-[20px]">
                Hoặc sử dụng tài khoản
              </h1>
              <div className="grid grid-flow-col gap-x-[50px]">
                <img src={FACEBOOK} alt="facebook"></img>
                <img src={GOOGLE} alt="google"></img>
                <img src={APPLE} alt="apple"></img>
              </div>
              <div className="mt-[30px]">
                <h1 className="font-primaryFont text-[16px]">
                  Chưa có tài khoản?{" "}
                  <Link
                    to="/register"
                    className="font-primaryFont text-[#426B1F] font-semibold"
                  >
                    Đăng ký ngay
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
