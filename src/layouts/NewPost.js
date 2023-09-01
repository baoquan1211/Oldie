import { useState, useEffect } from "react";
import { searchProduct } from "../services/guest/GuestServices";
import { useNavigate } from "react-router-dom";
import ProductShow from "../components/ProductShow";
import MORE from "../assets/svg/more.svg";
import Button from "../components/Button";

const NewPost = () => {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await searchProduct().then((res) => {
        setResult(res);
      });
    };
    fetchData();
  }, []);

  const seeAllHandle = () => {
    navigate("/search");
  };

  return (
    <section className="bg-white pt-[80px] pb-[50px]">
      <div className="flex items-center justify-center wrapper xl:justify-start">
        <h1 className="font-secondaryFont font-bold text-[43px] text-black">
          Bài viết mới đăng
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center text-center wrapper">
        <div className="mt-[40px]">
          <ProductShow value="price" nums={8}>
            {result}
          </ProductShow>
        </div>
        <div className="mt-[40px] flex justify-center items-center">
          <Button
            onClick={seeAllHandle}
            className="bg-[#F59500] w-[198px] h-[60px] text-[18px] font-secondaryFont font-bold text-white hover:bg-[#FFAD2D] active:bg-[#F09303]"
          >
            Xem tất cả
            <img src={MORE} alt="More"></img>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
