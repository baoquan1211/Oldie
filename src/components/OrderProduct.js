import { useState, useEffect } from "react";
import { productDetail } from "../services/guest/GuestServices";
import { Link } from "react-router-dom";

const OrderProduct = ({ _idProduct, numProduct }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await productDetail(_idProduct).then((res) => {
        setProduct(res.infProduct);
      });
    };
    fetchData();
  }, [_idProduct]);

  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Link to={`/product/${product._id}`}>
      <div className="lg:w-[450px] w-full h-[70px] flex justify-between pr-4 bg-[#FAFAF5] rounded-[24px] border-[2px] border-[#E6E6E6]">
        <div className="flex">
          <div className="flex items-center w-full">
            {product.HinhAnh && (
              <div className="flex">
                <img
                  srcSet={product.HinhAnh[0]}
                  alt="product_img"
                  className="rounded-[24px] h-[66px] w-[90px] md:block hidden"
                ></img>
              </div>
            )}
            <div className="ml-[30px] flex gap-y-[5px] flex-col w-full">
              <h1 className="font-primaryFont font-semibold text-[20px] text-black">
                {product.TenSp}
              </h1>
              <p className="font-primaryFont font-semibold text-[#426B1F]">
                {intToVND(product.Gia)} VND
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 font-primaryFont font-semibold text-[15px] text-red-500">
          Số lượng: {numProduct}
        </div>
      </div>
    </Link>
  );
};

export default OrderProduct;
