import React from "react";
import Header from "../layouts/Header";

const PostProduct = () => {
  return (
    <>
      <Header></Header>
      <div className="wrapper mt-[108px] flex justify-center">
        <div className="flex gap-x-[50px]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="font-secondaryFont font-bold text-[32px] text-[#F65900]">
                Danh mục bài đăng
              </h1>
              <select className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838]">
                <option disabled selected>
                  Chọn danh mục của sản phẩm
                </option>
                <option value="Gia dụng">Gia dụng</option>
                <option value="Thời trang">Thời trang</option>
                <option value="Thể thao">Thể thao</option>
                <option value="Điện tử">Điện tử</option>
                <option value="Sách">Sách</option>
                <option value="Xe">Xe</option>
              </select>
            </div>
            <div className="flex flex-col">
              <h1 className="font-secondaryFont font-bold text-[32px] text-[#F65900]">
                Thông tin chi tiết
              </h1>
              <div className="flex flex-col gap-y-4">
                <input
                  placeholder="Tên sản phẩm *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Loại sản phẩm *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Hãng sản xuất *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Số lượng *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Giá *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-secondaryFont font-bold text-[32px] text-[#F65900]">
                Địa chỉ
              </h1>
              <div className="flex flex-col gap-y-4">
                <input
                  placeholder="Tỉnh / thành phố *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Quận / huyện"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
                <input
                  placeholder="Phường / xã *"
                  className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <h1 className="font-secondaryFont font-bold text-[32px] text-[#F65900]">
                Mô tả chi tiết
              </h1>
              <textarea
                placeholder="Thời gian sử dụng
                Mô tả tình trạng
                Sửa chữa, nâng cấp, phụ kiện đi kèm
                Phương thức thanh toán
                Hình thức vận chuyển"
                className="bg-[#CAC5C5] input-form h-[352px] w-[350px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></textarea>
            </div>
            <div>
              <h1 className="font-secondaryFont font-bold text-[32px] text-[#F65900]">
                Số điện thoại
              </h1>
              <input
                placeholder="Số điện thoại người bán *"
                className="bg-[#CAC5C5] input-form w-[350px] h-[40px] rounded-[8px] pl-[15px] pr-[15px] font-primaryFont text-[18px] text-[#3E3838] placeholder-[#3E3838] placeholder-[18px]"
              ></input>
            </div>
            <div className="flex justify-center mt-2">
              <button className="w-[200px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303]  font-secondaryFont font-bold text-white text-[22px]">
                Đăng bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostProduct;
