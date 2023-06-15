import { useEffect, useState } from "react";
import ProductShow from "../components/ProductShow";
import Header from "../layouts/Header";
import { useParams } from "react-router-dom";
import { searchProduct } from "../services/guest/GuestServices";

const ProductSearch = () => {
  const searchItem = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await searchProduct(searchItem.name).then((res) => {
        setResult(res);
      });
    };
    fetchData();
  }, [searchItem.name]);
  return (
    <>
      <Header></Header>
      {console.log(result)}
      <div className="flex justify-center">
        <div className="mt-[108px] wrapper items-center pt-[70px] pb-[70px]">
          <ProductShow value="price">{result}</ProductShow>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
