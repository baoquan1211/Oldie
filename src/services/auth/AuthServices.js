import axios from "../customize-axios";

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

export { userLogin, userRegister };
