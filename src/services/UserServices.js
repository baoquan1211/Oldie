import axios from "./customizd-axios";

const userLogin = (username, password) => {
  return axios.post("/auth/login", { username, password });
};

const userRegister = (username, password, hoten, SDT, email) => {
  return axios.post("/auth/register", {
    username,
    password,
    hoten,
    SDT,
    email,
  });
};

const userPostProduct = (
  TenSp,
  LoaiSp,
  HangSanXuat,
  SoLuong,
  Mota,
  TinhTrang,
  Gia,
  DiaChi,
  SDT
) => {
  return axios.post("/user/postP", {
    TenSp,
    LoaiSp,
    HangSanXuat,
    SoLuong,
    Mota,
    TinhTrang,
    Gia,
    DiaChi,
    SDT,
  });
};

export { userLogin, userRegister, userPostProduct };
