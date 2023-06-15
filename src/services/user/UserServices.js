import axios from "../customize-axios";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = "Bearer " + token;

const postProduct = (
  _id,
  TenSp,
  LoaiSp,
  HangSanXuat,
  SoLuong,
  Mota,
  TinhTrang,
  Gia,
  DiaChi,
  SDT,
  images
) => {
  const data = new FormData();
  data.append("TenSp", TenSp);
  data.append("LoaiSp", LoaiSp);
  data.append("HangSanXuat", HangSanXuat);
  data.append("SoLuong", SoLuong);
  data.append("Mota", Mota);
  data.append("TinhTrang", TinhTrang);
  data.append("Gia", Gia);
  data.append("DiaChi", DiaChi);
  data.append("SDT", SDT);
  for (let i = 0; i < images.length; i++) {
    data.append("pictures", images[i]);
  }
  return axios.post(`/user/postP/${_id}`, data);
};

const addCart = (_idUser, _idP) => {
  return axios.patch(`product/cart/${_idUser}/${_idP}`);
};

const getCart = (_id) => {
  return axios.get(`user/getCart/${_id}`);
};
export { postProduct, addCart, getCart };
