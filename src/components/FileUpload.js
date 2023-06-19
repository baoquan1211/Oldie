import toastr from "toastr";
import IMAGE from "../assets/svg/camera.svg";
import ERASE from "../assets/images/cancel.png";

const FileUpload = ({ images, setImages }) => {
  const uploadHandle = (event) => {
    if (images.length < 4) {
      const image = event.target.files[0];
      setImages([...images, image]);
    } else {
      toastr.error("Chỉ được chọn tối đa 4 ảnh.");
    }
  };

  const removeImage = (item) => {
    const updateList = [...images];
    updateList.splice(updateList.indexOf(item));
    setImages(updateList);
  };

  return (
    <div>
      <div className="bg-[#EDE4E4] rounded-[8px] w-full min-h-[275px] flex flex-col items-center justify-center relative">
        <div className="grid grid-flow-col justify-center gap-x-3 absolute top-5">
          {images.map((i) => (
            <div className="relative" key={i.name}>
              <img
                src={URL.createObjectURL(i)}
                className="h-[60px] w-[60px] border-[2px] rounded-[8px] border-[#ffb30e] p-2"
                alt=""
              ></img>
              <button
                className="absolute z-10 -right-1 -top-1 "
                onClick={removeImage}
              >
                <img src={ERASE} alt="" />
              </button>
            </div>
          ))}
        </div>
        <input
          onChange={uploadHandle}
          accept="file"
          type="file"
          className="file-input relative opacity-0 z-10 cursor-pointer min-h-[92px] max-w-[117px] top-[35px] mt-5"
        ></input>
        <button className="absolute mt-5">
          <img src={IMAGE} alt="upload" />
        </button>
        <br /> <br />
        <h2 className="font-secondaryFont text-[16px] text-[#948989]">
          Định dạng file: PNG, JPG.
        </h2>
        <h2 className="font-secondaryFont text-[16px] text-[#948989]">
          Tối đa 4 ảnh.
        </h2>
      </div>
    </div>
  );
};

export default FileUpload;
