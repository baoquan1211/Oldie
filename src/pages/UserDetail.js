import { useState, useEffect } from "react";
import Header from "../layouts/Header";
import { userDetail } from "../services/guest/GuestServices";
import MAIL from "../assets/images/mail.png";
import PHONE from "../assets/images/phone.png";
import USER from "../assets/svg/user_avt.svg";
import ARROW from "../assets/svg/arrow.svg";

const UserDetail = () => {
  const _idUser = localStorage.getItem("_id");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await userDetail(_idUser).then((res) => {
        setUser(res);
      });
    };
    fetchData();
  }, [_idUser]);

  const dateHandle = (date) => {
    let result = String(date);
    return (
      result.substr(8, 2) +
      " - " +
      result.substr(5, 2) +
      " - " +
      result.substr(0, 4)
    );
  };

  return (
    <>
      <Header></Header>
      <div className="wrapper flex justify-center mt-[108px] p-10">
        <div className="bg-[#FAFAF5] p-8 rounded-[24px]">
          <img src={USER} alt="user" />
          <h1 className="font-secondaryFont font-bold text-[30px] text-[#FB3C00]">
            {user.hoten}
          </h1>
          <h1 className="mt-3 font-secondaryFont text-[20px]">
            Giới tính: <span>{user.gioitinh}</span>
          </h1>
          <h1 className="font-secondaryFont text-[20px]">
            Địa chỉ: <span>{user.diachi}</span>
          </h1>
          <h1 className="font-secondaryFont text-[20px]">
            Tham gia ngày: <span>{dateHandle(user.createdAt)}</span>
          </h1>
          <div className="mt-3 flex items-center pl-4 bg-[#E6E6E6] w-[400px] h-[40px] rounded-[8px] ">
            <img src={MAIL} alt="mail" className="w-[30px] h-[30px]" />
            <h1 className="pl-3 font-secondaryFont font-bold text-[18px] text-[#FF0000] opacity-80">
              Email: <span>{user.email}</span>
            </h1>
          </div>
          <div className="mt-3 flex items-center pl-4 bg-[#E6E6E6] w-[400px] h-[40px] rounded-[8px] ">
            <img src={PHONE} alt="phone" className="w-[30px] h-[30px]" />
            <h1 className="pl-3 font-secondaryFont font-bold text-[18px] text-[#FF0000] opacity-80">
              SĐT: <span>{user.SDT}</span>
            </h1>
          </div>
          <button className="mt-3 h-[48px] w-[380px] rounded-[8px] bg-[#F59500] text-[18px] text-white font-secondaryFont font-bold hover:bg-[#FFAD2D] active:bg-[#F09303]">
            <div className="flex justify-between items-center pr-[16px] pl-[16px]">
              <h2>Chỉnh sửa thông tin cá nhân</h2>
              <img src={ARROW} alt="arrow"></img>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
