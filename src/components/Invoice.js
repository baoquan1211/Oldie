import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../services/user/UserServices";
import toastr from "toastr";
import ARROW from "../assets/svg/arrow.svg";

const Invoice = ({ totalPrice, cart }) => {
  let voucherUsed = useRef(false);
  const shippingFee = 40000;
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState("");
  const [address, setAddress] = useState("");
  const _idUser = cart._idUser;
  const [totalPay, setTotalPay] = useState(() => {
    return totalPrice + shippingFee;
  });

  useEffect(() => {
    setTotalPay(() => {
      return totalPrice + shippingFee;
    });
  }, [totalPrice]);

  const voucherHandle = () => {
    if (voucher === "BETHAO" && !voucherUsed.current) {
      setTotalPay(totalPay - 50000);
      voucherUsed.current = true;
    }
  };

  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const paymentHandle = async () => {
    if (address === "") {
      toastr.error("Vui lòng nhập địa chỉ giao hàng.");
    } else {
      let res = await addOrder(
        _idUser,
        cart.cartItem,
        address,
        shippingFee,
        totalPay
      );
      if (res && res.message === "Order Successfully") {
        toastr.success("Đặt hàng thành công");
        navigate("/");
      } else {
        toastr.error("Có lỗi xảy ra. Vui lòng thử lại!");
        console.log(res);
      }
    }
  };

  return (
    <div className="flex flex-col bg-[#FAFAF5] lg:w-[430px] p-[24px] gap-y-[20px] rounded-[24px]">
      <h1 className="font-primaryFont text-[20px] font-semibold">Hóa đơn</h1>
      <div className="flex justify-between text-[16px] font-primaryFont mt-[10px]">
        <h2>Thành tiền</h2>
        <h2>{intToVND(totalPrice)}đ</h2>
      </div>
      <div className="flex justify-between text-[16px] font-primaryFont">
        <h2>Phí vận chuyển</h2>
        <h2>{intToVND(shippingFee)}đ</h2>
      </div>
      <div className="justify-between text-[16px] font-primaryFont">
        <h2>Địa chỉ giao hàng</h2>
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Địa chỉ"
          className="input-form rounded-[8px] xl:w-[382px] h-[40px] bg-[#F5F5F5] font-primaryFont text-[18px] text-[#9E9E9E] pl-[16px]"
        ></input>
      </div>
      <div className="flex justify-center gap-x-[16px] items-center ">
        <input
          onChange={(e) => {
            setVoucher(e.target.value);
          }}
          placeholder="Mã giảm giá"
          className="input-form rounded-[8px] w-[250px] h-[40px] bg-[#F5F5F5] font-primaryFont text-[18px] text-[#9E9E9E] pl-[16px]"
        ></input>
        <button
          onClick={voucherHandle}
          className="h-[41px] w-[82px] rounded-[8px] bg-[#F59500] text-[18px] text-white font-secondaryFont font-bold hover:bg-[#FFAD2D] active:bg-[#F09303] transition-all ease-in-out duration-300"
        >
          Sử dụng
        </button>
      </div>
      <div className="flex justify-between text-[16px] font-primaryFont font-bold">
        <h2>Tổng tiền</h2>
        <h2>{intToVND(totalPay)}đ</h2>
      </div>
      <div className="flex justify-center mt-[10px]">
        <button
          onClick={paymentHandle}
          className="h-[48px] w-[380px] rounded-[8px] bg-[#F59500] text-[18px] text-white font-secondaryFont font-bold hover:bg-[#FFAD2D] active:bg-[#F09303] transition-all ease-in-out duration-300"
        >
          <div className="flex justify-between items-center pr-[16px] pl-[16px] ">
            <h2>Thanh toán</h2>
            <img src={ARROW} alt="arrow"></img>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Invoice;
