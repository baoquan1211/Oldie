import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./layouts/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PostProduct from "./pages/PostProduct";
import ProductDetail from "./pages/ProductDetail";
import ProductSearch from "./pages/ProductSearch";
import UserDetail from "./pages/UserDetail";
import Error from "./pages/Error";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/post" element={<PostProduct />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route
              path="/search/:name/:type"
              element={<ProductSearch />}
            ></Route>
            <Route path="/search/:name" element={<ProductSearch />}></Route>
            <Route path="/search//:type" element={<ProductSearch />}></Route>
            <Route path="/search/" element={<ProductSearch />}></Route>
            <Route path="/user/:id" element={<UserDetail />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
