import React, { useState } from "react";
import Header from "../layouts/Header";
import toastr from "toastr";
import { postProduct } from "../services/user/UserServices";
import FileUpload from "../components/FileUpload";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PostProduct = () => {
  const navigate = useNavigate();
  const _idUser = localStorage.getItem("_id");
  const [catalog, setCatalog] = useState("");
  const [product, setProduct] = useState("");
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [discription, setDiscription] = useState("");

  const [images, setImages] = useState([]);

  const handleClick = async () => {
    if (catalog === "") {
      toastr.error("Vui lòng chọn danh mục sản phẩm!");
    } else if (product === "") {
      toastr.error("Vui lòng điền tên sản phẩm!");
    } else if (condition === "") {
      toastr.error("Vui lòng điền tình trạng sản phẩm!");
    } else if (brand === "") {
      toastr.error("Vui lòng điền hãng sản xuất sản phẩm!");
    } else if (amount === "") {
      toastr.error("Vui lòng điền số lượng sản phẩm!");
    } else if (price === "") {
      toastr.error("Vui lòng điền giá sản phẩm!");
    } else if (address === "") {
      toastr.error("Vui lòng điền địa chỉ!");
    } else if (phone === "") {
      toastr.error("Vui lòng điền số điện thoại!");
    } else if (discription === "") {
      toastr.error("Vui lòng điền mô tả sản phẩm!");
    } else if (images === "") {
      toastr.error("Vui lòng chọn ít nhất một ảnh sản phẩm!");
    } else {
      let res = await postProduct(
        _idUser,
        product,
        catalog,
        brand,
        amount,
        discription,
        condition,
        price,
        address,
        phone,
        images
      );
      if (res && res.status !== 500) {
        toastr.success("Đăng bài thành công!");
        const idProduct = res._id;
        navigate(`/product/${idProduct}`);
      } else {
        toastr.error("Có lỗi xảy ra. Vui lòng thử lại!");
      }
    }
  };

  return (
    <>
      <Header></Header>
      <div className="bg-white">
        <div className="text-center border-b-[2px] mt-[108px]">
          <h1 className="font-secondaryFont font-bold text-[68px] xl:text-[88px] text-[#F59500] ">
            Đăng bài sản phẩm
          </h1>
        </div>
        <div className="wrapper pt-[50px] pb-[50px] flex justify-center">
          <div className="flex flex-col xl:flex-row gap-x-[100px]">
            <div>
              <div className="flex flex-col">
                <h1 className="font-secondaryFont font-bold text-[36px] text-[#F59500]">
                  Hình ảnh của sản phẩm
                </h1>
                <h2 className="font-secondaryFont font-bold text-[16px] mb-4">
                  Xem thêm về{"  "}
                  <span className="text-[#2780ED]">Quy định hình ảnh</span>
                </h2>
                <FileUpload images={images} setImages={setImages}></FileUpload>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col">
                <h1 className="font-secondaryFont font-bold text-[32px] text-[#F59500]">
                  Danh mục bài đăng
                </h1>
                <select
                  defaultValue="Chọn danh mục của sản phẩm"
                  onChange={(e) => setCatalog(e.target.value)}
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838]"
                >
                  <option disabled>Chọn danh mục của sản phẩm</option>
                  <option value="Gia dụng">Gia dụng</option>
                  <option value="Thời trang">Thời trang</option>
                  <option value="Thể thao">Thể thao</option>
                  <option value="Điện tử">Điện tử</option>
                  <option value="Sách">Sách</option>
                  <option value="Xe">Xe</option>
                </select>
              </div>
              <div className="flex flex-col">
                <h1 className="font-secondaryFont font-bold text-[32px] text-[#F59500]">
                  Thông tin chi tiết
                </h1>
                <div className="flex flex-col gap-y-4">
                  <input
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="Tên sản phẩm *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>

                  <input
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Hãng sản xuất *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Số lượng *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                  <input
                    onChange={(e) => setCondition(e.target.value)}
                    placeholder="Tình trạng *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Giá *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-secondaryFont font-bold text-[32px] text-[#F59500]">
                  Thông tin liên hệ
                </h1>
                <div className="flex flex-col gap-y-4">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Địa chỉ *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Số điện thoại *"
                    className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center">
                <h1 className="font-secondaryFont font-bold text-[32px] text-[#F59500]">
                  Mô tả chi tiết
                </h1>
                <textarea
                  onChange={(e) => setDiscription(e.target.value)}
                  placeholder="Thời gian sử dụng
                Mô tả tình trạng
                Sửa chữa, nâng cấp, phụ kiện đi kèm
                Phương thức thanh toán
                Hình thức vận chuyển"
                  className="bg-[#CAC5C5] input-form h-[352px] w-[350px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></textarea>
              </div>
              <div className="flex justify-center mt-[35px]">
                <Button
                  className="w-[200px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303]  font-secondaryFont font-bold text-white text-[22px]"
                  onClick={handleClick}
                >
                  Đăng bài
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostProduct;
