import { React, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import { userRegister } from "../../services/auth/AuthServices";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hoten, setHoTen] = useState("");
  const [email, setEmail] = useState("");
  const [SDT, setSDT] = useState("");
  const [state, setState] = useState(false);
  const [message, setMessage] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    let res = await userRegister(username, password, hoten, SDT, email);
    if (res.message === "Register succesfully") {
      console.log("Đăng ký thành công!");
      setMessage("Đăng ký thành công!");
      setState(true);
    } else if (res.status === 500) {
      console.log("Tài khoản đã tồn tại.");
      setMessage("Tài khoản đã tồn tại!");
      setState(true);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="bg-white">
        <div className="wrapper flex xl:mt-[108px] pt-[30px] pb-[30px] items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-center border-b-[2px]">
              <h1 className="font-secondaryFont font-bold text-[64px] text-[#F59500]">
                Đăng ký
              </h1>
              <h2 className="font-secondaryFont text-[24px] text-[#F59500]">
                Tạo tài khoản ngay
              </h2>
            </div>
            <form
              onSubmit={Register}
              className="my-[30px] grid grid-flow-row gap-y-[20px] items-center justify-center"
            >
              <input
                placeholder="Nhập tên tài khoản..."
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <input
                placeholder="Nhập mật khẩu..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] px-[15px]  font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <input
                placeholder="Nhập họ tên..."
                onChange={(e) => setHoTen(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] px-[15px]  font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <input
                placeholder="Nhập Email..."
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] px-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <input
                placeholder="Nhập số điện thoại..."
                onChange={(e) => setSDT(e.target.value)}
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] px-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
              <button
                className="w-[330px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[22px] ct-transition"
                type="submit"
              >
                Đăng ký
              </button>
            </form>

            {state && (
              <h1 className="font-primaryFont text-[16px]">
                {message}{" "}
                <Link
                  to="/login"
                  className="font-primaryFont text-[#426B1F] font-semibold"
                  hidden={message === "Đăng ký thành công!" ? false : true}
                >
                  Quay về trang đăng nhập.
                </Link>
              </h1>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Register;
