import React, { useState, useEffect } from "react";
import { removeItemCart } from "../services/user/UserServices";
import LEFT from "../assets/svg/left.svg";
import RIGHT from "../assets/svg/right.svg";
import ERASE from "../assets/images/delete.png";
import { Link } from "react-router-dom";
import toastr from "toastr";

const CartProduct = ({
  children,
  pricePerId,
  setTotalPrice,
  numPerId,
  cart,
  setCart,
}) => {
  const _iduser = localStorage.getItem("_id");
  const [numProduct, setNumProduct] = useState(numPerId);

  const plusPriceHandle = (accumulator, currentValue) => {
    return accumulator + currentValue._price;
  };

  const pricePerProduct = numProduct * parseInt(children.Gia);

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
    setTotalPrice(pricePerId.reduce(plusPriceHandle, 0));
  });

  const Increase = () => {
    setNumProduct(numProduct + 1);
    let temp = cart;
    temp.cartItem.forEach((item) => {
      if (item._idSp === children._id) {
        item.amount++;
      }
      setCart(temp);
    });
  };
  const Decrease = () => {
    if (numProduct > 1) {
      setNumProduct(numProduct - 1);
      const temp = cart;
      temp.cartItem.forEach((item) => {
        if (item._idSp === children._id) {
          item.amount--;
        }
        setCart(temp);
      });
    }
  };

  const intToVND = (n) => {
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="xl:w-[800px] h-[160px] bg-[#FAFAF5] rounded-[24px] border-[2px] border-[#E6E6E6]">
      <div className="flex relative">
        <div className="flex items-center w-full">
          <div className=" items-center hidden md:flex">
            <Link to={`/product/${children._id}`}>
              <img
                srcSet={children.HinhAnh[0]}
                alt="product_img"
                className="rounded-[24px] w-[230px] h-[156px]"
              ></img>
            </Link>
          </div>
          <div className="ml-[30px] flex gap-y-[5px] flex-col w-full">
            <Link to={`/product/${children._id}`}>
              <h1 className="font-primaryFont font-semibold text-[20px]">
                {children.TenSp}
              </h1>
            </Link>
            <p className="font-primaryFont font-semibold text-[#426B1F]">
              {intToVND(children.Gia)} VND
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
        <div className="p-[26px] flex items-center">
          <h1
            className="font-primaryFont text-[20px] font-semibold"
            id={children._id}
          >
            {intToVND(pricePerProduct)}đ
          </h1>
        </div>
        <button
          onClick={async () => {
            await removeItemCart(_iduser, children._id).then((res) => {
              toastr.success("Xóa sản phẩm khỏi đơn hàng thành công");
              setTimeout(() => {
                document.location.reload();
              }, 800);
            });
          }}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          <img src={ERASE} alt="erase" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
