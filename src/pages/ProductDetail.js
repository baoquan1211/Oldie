import Header from "../layouts/Header";
import { useParams } from "react-router-dom";
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

  const intToVND = (price) => {
    let priceResult = price.toString();
    //priceResult[priceResult.length - 3] = ".";
    return priceResult;
  };

  const addCartHandle = async () => {
    await addCart(_idUser, product._id).then((res) => {
      if (res && res._id) {
        console.log(res);
        toastr.success("Thêm sản phẩm vào giỏ hàng thành công!");
      } else {
        console.log(res);
        toastr.error("Có lỗi xảy ra, vui lòng đăng nhập và thử lại!");
      }
    });
  };

  return (
    <>
      <Header></Header>
      <div className="text-center border-b-[2px] mt-[108px]">
        <h1 className="font-secondaryFont font-bold text-[88px] text-[#F59500] ">
          Thông tin sản phẩm
        </h1>
      </div>
      <div className="wrapper flex pt-[70px] pb-[70px] relative gap-x-[30px]">
        <div className="w-[605px] h-[400px] bg-[#CAC5C5] flex justify-center relative">
          {product.HinhAnh && (
            <img
              src={product.HinhAnh[index]}
              alt="productpicture"
              className="h-[400px]"
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
        <div className="flex flex-col rounded-[24px] bg-[#FCFCEE] w-[500px] justify-center items-center pt-3 pb-3">
          <div className="w-[400px]">
            {console.log(product)}
            {console.log(seller)}
            <h1 className="font-secondaryFont font-bold text-[54px] text-[#292D32]">
              {product.TenSp}
            </h1>
            <div className="flex justify-between">
              <h1 className="font-secondaryFont font-bold text-[30px] text-[#F59500]">
                {product.Gia} VNĐ
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
        <div className="flex flex-col gap-y-3 justify-center items-center w-[430px] h-[280px] rounded-[24px] bg-[#FCFCEE]">
          <div className="flex h-[50px] gap-x-[20px] justify-center items-center">
            <img src={USER} alt="user" className="h-[40px]" />
            <h1 className="font-secondaryFont font-bold text-[#FB3C00] text-[22px] min-w-[150px] text-center">
              {seller.hoten}
            </h1>
            <button className="h-[41px] w-[100px] rounded-[8px] bg-linearBtnBg text-[18px] text-white font-secondaryFont font-bold ">
              Xem trang
            </button>
          </div>
          <div className="mt-[20px] flex items-center justify-center gap-2 w-[379px] h-[48px] rounded-[8px] bg-[#E6E6E6]">
            <img src={PHONE} alt="phone" />
            <h1 className="font-secondaryFont font-bold text-[22px] text-[#FF0000]">
              Liên lạc: {seller.SDT}
            </h1>
          </div>
          <button
            onClick={addCartHandle}
            className="w-[200px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303]  font-secondaryFont font-bold text-white text-[22px]"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
