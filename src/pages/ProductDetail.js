import Header from "../layouts/Header";
import { useNavigate, useParams, Link } from "react-router-dom";
import { productDetail } from "../services/guest/GuestServices";
import { useEffect, useState } from "react";
import MOVELEFT from "../assets/svg/moveleft.svg";
import MOVERIGHT from "../assets/svg/moveright.svg";
import USER from "../assets/svg/user.svg";
import PHONE from "../assets/svg/phone.svg";
import { addCart } from "../services/user/UserServices";
import toastr from "toastr";

const ProductDetail = () => {
  const productID = useParams();
  const _idUser = localStorage.getItem("_id");
  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await productDetail(productID.id).then((res) => {
        setProduct(res.infProduct);
        setSeller(res.infSeller);
      });
    };
    fetchData();
  }, [productID.id]);

  const moveLeft = () => {
    if (index === 0) {
      setIndex(product.HinhAnh.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (index >= product.HinhAnh.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  function intToVND(n) {
    // format number 1000000 to 1,234,567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const addCartHandle = async () => {
    if (_idUser) {
      await addCart(_idUser, product._id).then((res) => {
        if (res && res._id) {
          toastr.success("Thêm sản phẩm vào giỏ hàng thành công!");
        } else {
          toastr.error("Có lỗi xảy ra, vui lòng đăng nhập và thử lại!");
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="bg-white text-center border-b-[2px] mt-12 lg:mt-[108px]">
        <h1 className="font-secondaryFont font-bold text-4xl md:text-4xl text-[#F59500]">
          Thông tin sản phẩm
        </h1>
      </div>
      <div className="bg-white">
        <div className="wrapper bg-white flex flex-col xl:flex-row items-center gap-y-3 pt-[70px] p-[70px] relative gap-x-[30px]">
          <div className="lg:w-[605px] w-full h-[400px] bg-[#CAC5C5] flex justify-center relative">
            {product.HinhAnh && (
              <img
                src={product.HinhAnh[index]}
                alt="productpicture"
                className="h-[400px] max-w-[390px] w-full"
              />
            )}
            <button onClick={moveLeft}>
              <img
                src={MOVELEFT}
                alt="moveleft"
                className="h-[46px] absolute left-2 top-[180px]"
              />
            </button>
            <button onClick={moveRight}>
              <img
                src={MOVERIGHT}
                alt="moveright"
                className="h-[46px] absolute right-2 top-[180px]"
              />
            </button>
          </div>
          <div className="flex flex-col rounded-[24px] bg-[#FCFCEE] w-fit xl:w-[500px] justify-center items-center p-3">
            <div className="lg:w-[400px]">
              <h1 className="font-secondaryFont font-bold text-4xl md:text-[54px] text-[#292D32]">
                {product.TenSp}
              </h1>
              <div className="flex flex-col md:flex-row justify-between">
                <h1 className="font-secondaryFont font-bold text-[30px] text-[#F59500]">
                  {intToVND(product.Gia)} VNĐ
                </h1>
                <h1 className="font-secondaryFont font-semibold text-[30px] text-[#426B1F]">
                  Số lượng: {product.SoLuong}
                </h1>
              </div>
              <h1 className="mt-4 font-secondaryFont font-semibold text-[20px]">
                Hãng sản xuất: {product.HangSanXuat}
              </h1>
              <h1 className="font-secondaryFont font-semibold text-[20px]">
                Tình trạng: {product.TinhTrang}
              </h1>
              <div className="mt-4">
                <h1 className="font-secondaryFont font-semibold text-[35px] text-[#F59500]">
                  Mô tả
                </h1>
                <p className="font-secondaryFont font-semibold text-[20px]">
                  {product.MoTa}
                </p>
              </div>
              <div className="mt-4">
                <h1 className="font-secondaryFont font-semibold text-[35px] text-[#F59500]">
                  Địa chỉ
                </h1>
                <p className="font-secondaryFont font-semibold text-[20px]">
                  {product.DiaChi}
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-2 flex-col gap-y-3 justify-center items-center xl:w-[430px] h-[280px] rounded-[24px] bg-[#FCFCEE]">
            <div className="flex h-[50px] gap-x-[20px] justify-center items-center">
              <div className="flex items-center">
                {seller.hinhanh ? (
                  <img
                    src={seller.hinhanh}
                    alt="user"
                    className="h-[50px] w-[50px] rounded-[180px]"
                  />
                ) : (
                  <img src={USER} alt="user" className="h-[50px]" />
                )}
                <h1 className="font-secondaryFont font-bold text-[#FB3C00] text-[22px] min-w-[150px] pl-3">
                  {seller.hoten}
                </h1>
              </div>
              <Link to={`http://localhost:3000/user/${seller._id}`}>
                <button className="h-[41px] w-[100px] rounded-[8px] bg-[#F59500] text-[18px] text-white font-secondaryFont font-bold hover:bg-[#FFAD2D] active:bg-[#F09303]">
                  Xem trang
                </button>
              </Link>
            </div>
            <div className="mt-[20px] p-2 flex items-center justify-center gap-2 xl:w-[379px] h-[48px] rounded-[8px] bg-[#E6E6E6]">
              <img src={PHONE} alt="phone" />
              <h1 className="font-secondaryFont font-bold text-[22px] text-[#FF0000]">
                Liên lạc: {seller.SDT}
              </h1>
            </div>
            <button
              onClick={addCartHandle}
              className="w-[200px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[22px]"
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
