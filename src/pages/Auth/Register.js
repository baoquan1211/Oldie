import { React, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../layouts/Header";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hoten, setHoTen] = useState("");
  const [email, setEmail] = useState("");
  const [SDT, setSDT] = useState("");
  const [state, setState] = useState(false);

  const register = async () => {
    try {
      const item = { username, password, hoten, email, SDT };
      const message = {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };
      console.log(message);
      await fetch("http://localhost:3001/auth/register", message)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          console.log("Login successfully.");
          setState(true);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="wrapper flex mt-[108px] pt-[30px] pb-[30px] items-center justify-center">
        <div className=" flex flex-col items-center">
          <div className="text-center border-b-[2px]">
            <h1 className="font-secondaryFont font-bold text-[64px] text-[#F59500]">
              Đăng ký
            </h1>
            <h2 className="font-secondaryFont text-[24px] text-[#F59500]">
              Tạo tài khoản ngay
            </h2>
          </div>
          <div className="mt-[30px] mb-[30px] grid grid-flow-row gap-y-[20px]">
            <input
              placeholder="Nhập tên tài khoản..."
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
            ></input>
            <input
              placeholder="Nhập mật khẩu..."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
            ></input>
            <input
              placeholder="Nhập họ tên..."
              onChange={(e) => setHoTen(e.target.value)}
              className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
            ></input>
            <input
              placeholder="Nhập Email..."
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
            ></input>
            <input
              placeholder="Nhập số điện thoại..."
              onChange={(e) => setSDT(e.target.value)}
              className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
            ></input>
          </div>
          <button
            className="w-[330px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303]  font-secondaryFont font-bold text-white text-[22px]"
            onClick={register}
          >
            Đăng ký
          </button>
          {state && (
            <h1 className="font-primaryFont text-[16px]">
              Đăng ký thành công!{" "}
              <Link
                to="/login"
                className="font-primaryFont text-[#426B1F] font-semibold"
              >
                Quay về trang đăng nhập.
              </Link>
            </h1>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Register;
