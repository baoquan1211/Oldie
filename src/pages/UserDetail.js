/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { userDetail } from "../services/guest/GuestServices";
import Header from "../layouts/Header";
import PostedProduct from "../components/PostedProduct";
import MAIL from "../assets/images/mail.png";
import PHONE from "../assets/images/phone.png";
import USER from "../assets/svg/user_avt.svg";
import ARROW from "../assets/svg/arrow.svg";
import CAMERA from "../assets/svg/camera_black.svg";
import Button from "../components/Button";
import EMPTY_CART from "../assets/images/empty-cart.png";
import EMPTY_PRODUCT from "../assets/svg/emptyproduct.svg";
import { getOrder, updateUser } from "../services/user/UserServices";
import toastr from "toastr";
import OrderShow from "../components/OrderShow";

const UserDetail = () => {
  const _id = localStorage.getItem("_id");
  const _idUser = useParams();
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState(user.hoten);
  const [gender, setGender] = useState(user.gioitinh);
  const [phone, setPhone] = useState(user.SDT);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.diachi);
  const [defaultavatar, setDefaultAvatar] = useState(user.hinhanh);
  const [avatar, setAvatar] = useState(user.hinhanh);
  const [show, setShow] = useState("postedproduct");

  const fetchUser = useCallback(async () => {
    await userDetail(_idUser.id).then((res) => {
      setUser(res._userInf);
      setProduct(res._userProduct);
      setDefaultAvatar(user.hinhanh);
      setName(user.hoten);
      setPhone(user.SDT);
      setEmail(user.email);
      setAddress(user.diachi);
      setGender(user.gioitinh);
    });
  }, [
    _idUser,
    user.hoten,
    user.hinhanh,
    user.SDT,
    user.email,
    user.diachi,
    user.gioitinh,
  ]);

  useEffect(() => {
    fetchUser();
  }, [
    _idUser,
    user.hoten,
    user.hinhanh,
    user.SDT,
    user.email,
    user.diachi,
    user.gioitinh,
    order,
    fetchUser,
  ]);

  useEffect(() => {
    const fetchOrder = async () => {
      if (_id === _idUser.id) {
        await getOrder(_id).then((res) => {
          setOrder(res);
        });
      }
    };
    fetchOrder();
  }, [_idUser, _id]);

  const dateHandle = (date) => {
    let result = String(date);
    return (
      result.substr(8, 2) +
      "-" +
      result.substr(5, 2) +
      "-" +
      result.substr(0, 4)
    );
  };

  const updateUserHandle = async () => {
    let res = await updateUser(
      _idUser.id,
      name,
      gender,
      phone,
      address,
      email,
      avatar
    );
    if (res && res.message === "Updated Successfully") {
      toastr.success("Cập nhật dữ liệu người dùng thành công");
      setTimeout(() => {
        fetchUser();
      }, 800);
    } else {
      toastr.error("Có lỗi xảy ra. Vui lòng thử lại");
    }
  };
  return (
    <>
      <Header></Header>
      <div className="bg-white">
        <div className="wrapper flex flex-col xl:flex-row items-center xl:items-start justify-center mt-[108px] p-10 gap-[50px]">
          <div className="bg-[#FAFAF5] p-8 rounded-[24px] h-fit w-fit">
            {defaultavatar ? (
              <img
                src={defaultavatar}
                alt="user"
                className="rounded-[180px] h-[150px] w-[150px]"
              />
            ) : (
              <img src={USER} alt="user" />
            )}
            <h1 className="font-secondaryFont font-bold text-[30px] text-[#FB3C00]">
              {user.hoten}
            </h1>
            <h1 className="mt-3 font-secondaryFont font-semibold text-[20px] text-black">
              Giới tính: <span>{user.gioitinh}</span>
            </h1>
            <h1 className="font-secondaryFont font-semibold text-[20px] text-black">
              Địa chỉ: <span>{user.diachi}</span>
            </h1>
            <h1 className="font-secondaryFont font-semibold text-[20px] text-black">
              Tham gia ngày: <span>{dateHandle(user.createdAt)}</span>
            </h1>
            <div className="mt-3 flex items-center pl-4 bg-[#E6E6E6] xl:w-[400px] overflow-x-auto h-[40px] rounded-[8px] ">
              <img src={MAIL} alt="mail" className="w-[30px] h-[30px]" />
              <h1 className="pl-3 font-secondaryFont font-bold text-sm xl:text-[18px] text-[#FF0000] opacity-80">
                <span>{user.email}</span>
              </h1>
            </div>
            <div className="mt-3 flex items-center pl-4 bg-[#E6E6E6] xl:w-[400px] overflow-x-auto h-[40px] rounded-[8px] ">
              <img src={PHONE} alt="phone" className="w-[30px] h-[30px]" />
              <h1 className="pl-3 font-secondaryFont font-bold text-[18px] text-[#FF0000] opacity-80">
                <span>{user.SDT}</span>
              </h1>
            </div>
            {_id === _idUser.id && (
              <a href="#changeInfoUser">
                <Button className="mt-3 h-[48px] xl:w-[400px] rounded-[8px] bg-[#F59500] w-full lg:text-[18px] text-white font-secondaryFont font-bold hover:bg-[#FFAD2D] active:hover:bg-[#FFAD2D] ct-transition">
                  <div className="flex justify-between items-center pr-[16px] pl-[16px]">
                    <h2>Chỉnh sửa thông tin cá nhân</h2>
                    <img src={ARROW} alt="arrow"></img>
                  </div>
                </Button>
              </a>
            )}
            <dialog id="changeInfoUser" className="modal">
              <form method="dialog" className="modal-box">
                <a
                  href="#"
                  className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                >
                  ✕
                </a>
                <div className="flex flex-col items-center justify-center gap-y-3">
                  <div className="rounded-[180px] h-[180px] w-[180px] bg-[#D9D9D9] relative"></div>

                  {avatar ? (
                    <img
                      src={avatar ? URL.createObjectURL(avatar) : USER}
                      alt="avatar"
                      className="h-[150px] w-[150px] rounded-[180px] border-solid absolute top-10 opacity-50"
                    />
                  ) : (
                    <img
                      src={USER}
                      alt="avatar"
                      className="h-[150px] w-[150px] rounded-[180px] border-solid absolute top-10 opacity-50"
                    />
                  )}
                  <img
                    src={CAMERA}
                    alt="camera"
                    className="absolute top-[85px]"
                  />
                  <input
                    onChange={(e) => setAvatar(e.target.files[0])}
                    type="file"
                    accept="file"
                    className="absolute rounded-[180px] h-[150px] w-[150px] opacity-0 cursor-pointer z-10 top-10"
                  />
                  <div>
                    <label className="font-primaryFont text-[18px]">
                      Họ tên
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      defaultValue={user.hoten}
                      className="bg-[#CAC5C5] input-form w-[464px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                    ></input>
                  </div>
                  <div className="flex justify-between gap-x-[64px]">
                    <div className="flex flex-col">
                      <label className="font-primaryFont text-[18px]">
                        Số điện thoại
                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        defaultValue={user.SDT}
                        className="bg-[#CAC5C5] input-form w-[290px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-primaryFont text-[18px]">
                        Giới tính
                      </label>
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        defaultValue={user.gioitinh ? user.gioitinh : "Nam"}
                        className=" bg-[#CAC5C5] w-[110px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] cursor-pointer"
                      >
                        <option>Nam</option>
                        <option>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-primaryFont text-[18px]">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={user.email}
                      className="bg-[#CAC5C5] input-form w-[464px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                    ></input>
                  </div>
                  <div>
                    <label className="font-primaryFont text-[18px]">
                      Địa chỉ
                    </label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      defaultValue={user.diachi}
                      className="bg-[#CAC5C5] input-form w-[464px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                    ></input>
                  </div>
                  <button
                    onClick={updateUserHandle}
                    className="w-[200px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[22px]"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </dialog>
          </div>
          <div className="w-fit hidden md:flex flex-col p-8 rounded-[8px] border-dashed border-[#FFB800] border-[2px] gap-y-3 h-fit">
            <div className="flex">
              <div className="pr-[50px] border-r-[#FFB800] border-r-[2px]">
                <Button
                  onClick={() => {
                    setShow("postedproduct");
                  }}
                  className={`h-[70px] w-40 lg:w-[230px] font-primaryFont font-bold rounded-[8px] border-[#FFB800] border-[2px] ${
                    show === "postedproduct"
                      ? "text-white bg-[#FFB800] hover:bg-white hover:text-[#FFB800]"
                      : "text-[#FFB800] bg-white hover:bg-[#FFB800] hover:text-white"
                  }`}
                >
                  Đang bán
                </Button>
              </div>
              <div className="pl-[50px]">
                <Button
                  disabled={_id === _idUser.id ? false : true}
                  onClick={() => {
                    setShow("order");
                  }}
                  className={`h-[70px] w-40 lg:w-[230px] font-primaryFont font-bold rounded-[8px] border-[#FFB800] border-[2px]  ${
                    _id === _idUser.id
                      ? show === "order"
                        ? "text-white bg-[#FFB800] hover:bg-white focus:bg-[#FFB800] active:bg-white hover:text-[#FFB800]"
                        : "text-[#FFB800] bg-white hover:bg-[#FFB800] focus:bg-[#FFB800] active:bg-[#FFB800] hover:text-white active:text-white"
                      : "bg-gray-300 border-gray-400 cursor-pointer"
                  }`}
                >
                  Đã đặt
                </Button>
              </div>
            </div>
            <div className="flex flex-col mt-5 h-fit gap-y-3">
              {show === "postedproduct" ? (
                product.length > 0 ? (
                  product.map((item) => (
                    <PostedProduct key={item._id}>{item}</PostedProduct>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center p-8">
                    <img
                      src={EMPTY_PRODUCT}
                      alt="emptycart"
                      className="max-w-[240px]"
                    ></img>
                    <h1 className="font-secondaryFont font-bold text-[26px]">
                      Chưa có sản phẩm nào được đăng
                    </h1>
                  </div>
                )
              ) : order.length > 0 ? (
                <div className="flex flex-col items-center justify-center gap-y-5">
                  <OrderShow key={_id} _idUser={_id}></OrderShow>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8">
                  <img
                    src={EMPTY_CART}
                    alt="emptycart"
                    className="max-w-[240px] opacity-60"
                  ></img>
                  <h1 className="font-secondaryFont font-bold text-[26px]">
                    Chưa có sản phẩm nào được đặt
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
