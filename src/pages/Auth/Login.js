import React, { useState } from "react";
import "../../css/Base.css";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import toastr from "toastr";

import FACEBOOK from "../../assets/svg/facebook.svg";
import GOOGLE from "../../assets/svg/google.svg";
import APPLE from "../../assets/svg/apple.svg";
import { userLogin } from "../../services/auth/AuthServices";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Login = async () => {
    if (!username) {
      toastr.error("Vui lòng nhập tài khoản.");
    } else if (!password) {
      toastr.error("Vui lòng nhập mật khẩu.");
    } else {
      let res = await userLogin(username, password);
      if (res && res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.user.username);
        localStorage.setItem("_id", res.user._id);
        localStorage.setItem("name", res.user.hoten);
        navigate("/home");
      } else {
        if (res && res.status === 400) {
          console.log(res);
          if (res.data.message === "Invalid password") {
            toastr.error("Sai mật khẩu, vui lòng thử lại.");
          }
          if (res.data.message === "User not found") {
            toastr.error("Tài khoản không tồn tại.");
          }
        }
      }
    }
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
                onClick={Login}
              >
                Đăng nhập
              </button>
            </div>
            <div className="flex flex-col gap-y-[44px] justify-center items-center">
              <h1 className="font-primaryFont text-[20px]">
                Hoặc sử dụng tài khoản
              </h1>
              <div className="grid grid-flow-col gap-x-[50px]">
                <a href="https://www.facebook.com/">
                  <img src={FACEBOOK} alt="facebook"></img>
                </a>
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S369793380%3A1685973355175576&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&ffgf=1&hl=vi&ifkv=Af_xneGg7XjIKNJUuxnxu3aRdMjh2-T1oOSCALQVLLyknE2ciCJ8_-GLwbnQdQt8e8QjG30f8oG8&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                  <img src={GOOGLE} alt="google"></img>
                </a>
                <a href="https://appleid.apple.com/sign-in">
                  <img src={APPLE} alt="apple"></img>
                </a>
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
