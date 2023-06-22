import Header from "../layouts/Header";
import { Link } from "react-router-dom";
import ERROR from "../assets/svg/error.svg";

const Error = () => {
  return (
    <>
      <Header></Header>
      <div className="bg-white text-center border-b-[2px] mt-[108px]">
        <h1 className="font-secondaryFont font-bold text-[88px] text-[#F59500] ">
          Trang không tồn tại
        </h1>
      </div>
      <div className="bg-white flex flex-col justify-center items-center p-[50px]">
        <img src={ERROR} alt="error" />
        <p className="font-primaryFont text-[24px]">
          Nội dung hiện không tồn tại. Vui lòng trở về trang chủ.
        </p>
        <Link to="/" className="mt-[20px]">
          <button className="w-[250px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[20px]">
            Quay lại Trang chủ
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;
