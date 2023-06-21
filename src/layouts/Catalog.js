import { Link } from "react-router-dom";

import CIRCLE from "../assets/images/circle.png";
import HOUSEHOLD from "../assets/images/household.png";
import ELECTRONIC from "../assets/images/electronic.png";
import CLOTHES from "../assets/images/clothes.png";
import SPORT from "../assets/images/sport.png";
import VEHICLE from "../assets/images/vehicle.png";
import BOOK from "../assets/images/book.png";

const Catalog_Items = [
  {
    title: "Gia dụng",
    image: HOUSEHOLD,
  },
  {
    title: "Thời trang",
    image: CLOTHES,
  },
  {
    title: "Thể thao",
    image: SPORT,
  },
  {
    title: "Điện tử",
    image: ELECTRONIC,
  },
  {
    title: "Sách",
    image: BOOK,
  },
  {
    title: "Xe",
    image: VEHICLE,
  },
];

const Catalog = () => {
  return (
    <section className="h-[571px] bg-[#FEFAF1] pt-[80px] pb-[80px]">
      <div className="wrapper flex items-center">
        <div className="w-full">
          <h1 className="text-[43px] font-bold font-secondaryFont text-black">
            Danh mục sản phẩm
          </h1>
        </div>
      </div>
      <div className="wrapper flex items-center justify-center">
        <div className="grid grid-cols-6 justify-between gap-x-[105px] mt-12 max-w-[1438px] text-center">
          {Catalog_Items.map((item) => (
            <Link to={`/search//${item.title}`} key={item.title}>
              <div className="grid grid-rows-2 gap-y-[90px] mt-[80px] max-w-[218px]">
                <div className="flex flex-row items-center justify-center">
                  <img srcSet={CIRCLE} alt="Circle" className="absolute"></img>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute"
                  ></img>
                </div>
                <h2 className="font-secondaryFont text-[30px] font-bold text-[#0A0909]">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
