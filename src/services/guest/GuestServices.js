import axios from "../customize-axios";

const productDetail = (_idP) => {
  return axios.get(`/product/${_idP}`);
};

const searchProduct = (name = "", type = "") => {
  return axios.get(`product/search?name=${name}&type=${type}`);
};

export { searchProduct, productDetail };
