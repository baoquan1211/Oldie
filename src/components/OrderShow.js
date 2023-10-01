import { useState, useEffect } from "react";
import { getOrder } from "../services/user/UserServices";
import OrderProduct from "../components/OrderProduct";

const OrderShow = ({ _idUser }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getOrder(_idUser).then((res) => {
        setOrders(res);
      });
    };
    fetchData();
  }, [_idUser]);

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

  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return orders.map((order) => (
    <div
      key={order._id}
      className="flex flex-col bg-[#FAFAF5] rounded-[16px] p-5 gap-y-1"
    >
      <h1 className="font-primaryFont font-semibold text-[17px] text-black">
        Mã đơn hàng: #{order._id}
      </h1>
      <h1 className="font-primaryFont font-semibold text-[17px] text-black">
        Ngày đặt: {dateHandle(order.createdAt)}
      </h1>
      <h1 className="font-primaryFont font-semibold text-[17px] text-black">
        Phí vận chuyển: {intToVND(order.ChiPhiVanChuyen)} VND
      </h1>
      <h1 className="font-primaryFont font-semibold text-[17px] text-black">
        Tổng tiền: {intToVND(order.TongTien)} VND
      </h1>
      <h1 className="font-primaryFont font-semibold text-[17px] text-black">
        Các sản phẩm:{" "}
      </h1>
      <div className="flex flex-col items-center gap-y-3 mt-2">
        {order.orderItem.map((product, index) => (
          <OrderProduct
            key={index}
            _idProduct={product._idSp}
            numProduct={product.amount}
          />
        ))}
      </div>
    </div>
  ));
};

export default OrderShow;
