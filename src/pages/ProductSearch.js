import { useEffect, useState } from "react";
import ProductShow from "../components/ProductShow";
import Header from "../layouts/Header";
import { useParams, Link } from "react-router-dom";
import { searchProduct } from "../services/guest/GuestServices";
import ERROR from "../assets/svg/error.svg";

const ProductSearch = () => {
  const searchItem = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await searchProduct(searchItem.name, searchItem.type).then((res) => {
        setResult(res);
      });
    };
    fetchData();
  }, [searchItem.name, searchItem.type]);
  if (result.length > 0) {
    return (
      <>
        <Header></Header>
        <div className="bg-white">
          <div className="flex justify-center">
            <div className="mt-12 lg:mt-[108px] wrapper items-center lg:py-[70px]">
              <ProductShow value="price">{result}</ProductShow>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header></Header>
        <div className="bg-white text-center border-b-[2px] lg:mt-[108px]">
          <h1 className="font-secondaryFont font-bold text-[88px] text-[#F59500] ">
            Không tìm thấy kết quả
          </h1>
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-[50px]">
          <img src={ERROR} alt="error" />
          <p className="font-primaryFont text-[24px] max-w-[500px]">
            Sản phẩm bạn muốn tìm kiếm hiện không có trên website. Hãy chắc chắn
            rằng tất cả các từ đều đúng chính tả. Hãy thử những từ khóa khác
            hoặc những từ khóa chung hơn.
          </p>
          <Link to="/" className="mt-[20px]">
            <button className="w-[250px] h-[68px] rounded-[8px] mt-[10px] bg-[#F59500]  hover:bg-[#FFAD2D] active:bg-[#F09303] font-secondaryFont font-bold text-white text-[20px]">
              Quay lại Trang chủ
            </button>
          </Link>
        </div>
      </>
    );
  }
};

export default ProductSearch;
