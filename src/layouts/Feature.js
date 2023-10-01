import FEATURE1 from "../assets/images/feature_1.png";
import FEATURE2 from "../assets/images/feature_2.png";
import FEATURE3 from "../assets/images/feature_3.png";

const Feature_Items = [
  {
    title1: "Giá cả",
    title2: "hợp lý",
    image: FEATURE1,
  },
  {
    title1: "Giao hàng",
    title2: "tập nơi",
    image: FEATURE2,
  },
  {
    title1: "Mua hàng",
    title2: "nhanh chóng",
    image: FEATURE3,
  },
];

const Feature = () => {
  return (
    <section className="h-[456px] bg-[#FEEFD0] items-center justify-center hidden md:flex">
      <div className=" p-[48px] bg-white rounded-[46px] flex items-center justify-center gap-x-[95px]">
        {Feature_Items.map((item) => (
          <div
            className="flex flex-col xl:flex-row items-center justify-center gap-x-[15px]"
            key={item.title1}
          >
            <img src={item.image} alt={item.title}></img>
            <div className="flex flex-col items-center justify-center xl:items-start">
              <h1 className="text-[#FE9501] font-secondaryFont text-center text-[35px] font-bold">
                {item.title1}
              </h1>
              <h1 className="text-[#FE9501] font-secondaryFont text-center text-[35px] font-bold">
                {item.title2}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
