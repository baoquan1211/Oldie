import { useState, useEffect } from "react";
import { getOrder } from "../services/user/UserServices";
import OrderProduct from "../components/OrderProduct";

const OrderShow = ({ _idUser }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getOrder(_idUser).then((res) => {
        setOrder(res);
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

  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return order.map((item) => (
    <div
      key={item._id}
      className="flex flex-col bg-[#FAFAF5] rounded-[16px] p-5 gap-y-1"
    >
      <h1 className=" font-primaryFont font-semibold text-[17px]">
        Mã đơn hàng: #{item._id}
      </h1>
      <h1 className=" font-primaryFont font-semibold text-[17px]">
        Ngày đặt: {dateHandle(item.createdAt)}
      </h1>
      <h1 className=" font-primaryFont font-semibold text-[17px]">
        Phí vận chuyển: {intToVND(item.ChiPhiVanChuyen)} VND
      </h1>
      <h1 className=" font-primaryFont font-semibold text-[17px]">
        Tổng tiền: {intToVND(item.TongTien)}
      </h1>
      <h1 className=" font-primaryFont font-semibold text-[17px]">
        Các sản phẩm:{" "}
      </h1>
      <div className="flex flex-col items-center gap-y-3 mt-2">
        {item.orderItem.map((item) => (
          <OrderProduct
            key={item._id}
            _idProduct={item._idSp}
            numProduct={item.amount}
          ></OrderProduct>
        ))}
      </div>
    </div>
  ));
};

export default OrderShow;