import { Link } from "react-router-dom";

const PostedProduct = ({ children }) => {
  function intToVND(n) {
    // format number 1000000 to 1.234.567
    let result = String(n);
    return result.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Link to={`/product/${children._id}`}>
      <div className="w-[561.6px] h-[100px] bg-[#FAFAF5] rounded-[24px] border-[2px] border-[#E6E6E6]">
        <div className="flex">
          <div className="flex items-center w-full">
            <div className="flex">
              <img
                srcSet={children.HinhAnh[0]}
                alt="product_img"
                className="rounded-[24px] max-h-[100px] max-w-[100px]"
              ></img>
            </div>
            <div className="ml-[30px] flex gap-y-[5px] flex-col w-full">
              <h1 className="font-primaryFont font-semibold text-[20px] text-black">
                {children.TenSp}
              </h1>
              <p className="font-primaryFont font-semibold text-[#426B1F]">
                {intToVND(children.Gia)} VND
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostedProduct;
