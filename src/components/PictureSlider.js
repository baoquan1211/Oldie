import useState from "react";
import MOVELEFT from "../assets/svg/moveleft.svg";
import MOVERIGHT from "../assets/svg/moveright.svg";

const PictureSlider = ({ Pictures }) => {
  const [index, setIndex] = useState(0);

  const moveLeft = () => {
    if (index === 0) {
      setIndex(Pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const moveRight = () => {
    if (index >= Pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="w-[605px] h-[400px] bg-[#CAC5C5] flex justify-center relative">
      {Pictures && (
        <img src={Pictures[index]} alt="productpicture" className="h-[400px]" />
      )}
      <button onClick={moveLeft}>
        <img
          src={MOVELEFT}
          alt="moveleft"
          className="h-[46px] absolute left-2 top-[180px]"
        />
      </button>
      <button onClick={moveRight}>
        <img
          src={MOVERIGHT}
          alt="moveright"
          className="h-[46px] absolute right-2 top-[180px]"
        />
      </button>
    </div>
  );
};
export default PictureSlider;
