import { React, useState } from "react";

import Header from "../layouts/Header";
import SearchBanner from "../layouts/SearchBanner";
import Slogan from "../layouts/Slogan";
import Catalog from "../layouts/Catalog";
import NewPost from "../layouts/NewPost";
import Feature from "../layouts/Feature";
import TopProducts from "../layouts/TopProducts";

const Home = () => {
  const username = localStorage.getItem("username");
  const _id = localStorage.getItem("_id");
  const token = localStorage.getItem("token");
  const [name, setName] = useState(localStorage.getItem("name"));

  return (
    <>
      <Header></Header>
      <SearchBanner></SearchBanner>
      <Slogan></Slogan>
      <Catalog></Catalog>
      <NewPost></NewPost>
      <Feature></Feature>
      <TopProducts></TopProducts>
    </>
  );
};

export default Home;
