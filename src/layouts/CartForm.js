import { React, useState } from "react";
import "../css/Base.css";

import CartProduct from "../components/CartProduct";
import Invoice from "../components/Invoice";

import PRODUCT_IMG from "../assets/images/product_cart.png";

const product = [
  {
    _id: "001",
    _name: "Từ IQ đến EQ",
    _price: 30000,
    _img: PRODUCT_IMG,
  },
  {
    _id: "002",
    _name: "Từ IQ đến EQ_2",
    _price: 40000,
    _img: PRODUCT_IMG,
  },
];

const CartForm = () => {
  const pricePerId = [];
  const [totalPrice, setTotalPrice] = useState(0);
  /*   const [numProduct, setNumProduct] = useState(1);
   */
  /* const totalPriceHandle = () => {
    var total = 0;
    for (var priceI in pricePerId) {
      total += priceI.price;
    }
    return total;
  }; */

  /* const plusPriceHandle = (accumulator, currentValue) => {
    return accumulator + currentValue._price;
  }; */

  /*  const CartProduct = ({ children }) => {
    const [numProduct, setNumProduct] = useState(1);

    const pricePerProduct = numProduct * parseInt(children._price);

    useEffect(() => {
      const index = pricePerId.findIndex(({ _id }) => _id === children._id);
      if (index === -1) {
        pricePerId.push({
          _id: children._id,
          _price: pricePerProduct,
        });
      } else {
        pricePerId[index]._price = pricePerProduct;
      }
      totalPrice = pricePerId.reduce(plusPriceHandle, 0);
      console.log(totalPrice);
    }, [numProduct]);

    const Increase = () => {
      setNumProduct(numProduct + 1);
    };
    const Decrease = () => {
      if (numProduct > 1) {
        setNumProduct(numProduct - 1);
      }
    };

    return (
      <div className="w-[880px] h-[160px] bg-[#FAFAF5] rounded-[24px] border-[2px] border-[#E6E6E6]">
        <div className="flex">
          <div className="flex items-center w-full">
            <img
              srcSet={`${children._img} 1x`}
              alt="product_img"
              className="rounded-[24px] max-h-[156px]"
            ></img>
            <div className="ml-[30px] flex gap-y-[5px] flex-col w-full">
              <h1 className="font-primaryFont font-semibold text-[20px]">
                {children._name}
              </h1>
              <p className="font-primaryFont font-semibold text-[#426B1F]">
                {children._price} VND
              </p>
              <div className="w-[170px] h-[40px] rounded-[30px] flex items-center border-[2px] border-[#E6E6E6]">
                <div className="font-secondaryFont font-bold text-[22px] text-[#FB3C00] w-[94px] text-center">
                  {numProduct}
                </div>
                <div className="w-[38px] h-[38px] flex items-center border-l-[2px] border-[#E6E6E6]">
                  <button onClick={Decrease}>
                    <img src={LEFT} alt="decrease"></img>
                  </button>
                </div>
                <div className="w-[38px] h-[38px] flex items-center border-l-[2px] border-[#E6E6E6]">
                  <button onClick={Increase}>
                    <img src={RIGHT} alt="increase"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[26px] flex">
            <h1
              className="font-primaryFont text-[20px] font-semibold"
              id={children._id}
            >
              {pricePerProduct}đ
            </h1>
          </div>
        </div>
      </div>
    );
  }; */
  /* const Invoice = ({ totalPrice }) => {
    const shippingFee = 40000;
    const [totalPay, setTotalPay] = useState(() => {
      return totalPrice + shippingFee;
    });
    useEffect(() => {
      setTotalPay(() => {
        return totalPrice + shippingFee;
      });
      console.log(totalPrice);
    }, [totalPrice]);
    return (
      <div className="flex flex-col bg-[#FAFAF5] w-[430px] p-[24px] gap-y-[20px] rounded-[24px]">
        <h1 className="font-primaryFont text-[20px] font-semibold">Hóa đơn</h1>
        <div className="flex justify-between text-[16px] font-primaryFont mt-[10px]">
          <h2>Thành tiền</h2>
          <h2>{totalPrice}</h2>
        </div>
        <div className="flex justify-between text-[16px] font-primaryFont">
          <h2>Phí vận chuyển</h2>
          <h2>{shippingFee}</h2>
        </div>
        <div className="flex justify-center gap-x-[16px] items-center ">
          <input
            placeholder="Mã giảm giá"
            className="input-form rounded-[8px] w-[250px] h-[40px] bg-[#F5F5F5] font-primaryFont text-[18px] text-[#9E9E9E] pl-[16px]"
          ></input>
          <button className="h-[41px] w-[82px] rounded-[8px] bg-linearBtnBg text-[18px] text-white font-secondaryFont font-bold ">
            Sử dụng
          </button>
        </div>
        <div className="flex justify-between text-[16px] font-primaryFont font-bold">
          <h2>Tổng tiền</h2>
          <h2>{totalPay}</h2>
        </div>
        <div className="flex justify-center mt-[10px]">
          <button className="h-[48px] w-[380px] rounded-[8px] bg-linearBtnBg text-[18px] text-white font-secondaryFont font-bold ">
            <div className="flex justify-between items-center pr-[16px] pl-[16px]">
              <h2>Thanh toán</h2>
              <img src={ARROW} alt="arrow"></img>
            </div>
          </button>
          <button className="h-2 w-2 bg-black" onClick={tick}></button>
        </div>
      </div>
    );
  }; */

  return (
    <div className="wrapper mt-[30px] mb-[30px] flex gap-x-[30px]">
      <div className="flex flex-col gap-y-[15px]">
        {product.map((item) => (
          <CartProduct
            key={item._id}
            pricePerId={pricePerId}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          >
            {item}
          </CartProduct>
        ))}
      </div>
      <Invoice pricePerId={pricePerId} totalPrice={totalPrice}></Invoice>
    </div>
  );
};

export default CartForm;
