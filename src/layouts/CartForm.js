import { useState, useEffect } from "react";
import "../css/Base.css";

import CartProduct from "../components/CartProduct";
import Invoice from "../components/Invoice";

import EMPTY_CART from "../assets/images/empty-cart.png";
import { getCart } from "../services/user/UserServices";

const CartForm = () => {
  const _idUser = localStorage.getItem("_id");
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const pricePerId = [];
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await getCart(_idUser).then((res) => {
        setCart(res.cart);
        setProducts(res.products);
      });
    };
    fetchData();
  }, [_idUser]);

  if (cart) {
    return (
      <div className="wrapper mt-[30px] mb-[30px] flex gap-x-[30px]">
        <div className="flex flex-col gap-y-[15px]">
          {products.map((item, index) => (
            <CartProduct
              numPerId={cart.cartItem[index].amount}
              key={item._idSp}
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
  } else {
    return (
      <div className="flex flex-col justify-center items-center p-[100px]">
        <img srcSet={`${EMPTY_CART} 2x`} alt="empty_cart" />
        <h1 className="font-secondaryFont font-bold text-[30px] text-[#F59500]">
          Giỏ hàng hiện trống!!!
        </h1>
        ;
      </div>
    );
  }
};

export default CartForm;
