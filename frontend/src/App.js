import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Activate,
  Landing,
  About,
  Products,
  Contact,
  Favorite,
  Cart,
  Sell,
  ProductPredict,
  Login,
  Signup,
  ResetPassword,
  ResetPasswordConfirm,
  Google,
} from "./containers";

import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/favorite" exact element={<Favorite />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/sell" exact element={<Sell />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/product-predict" exact element={<ProductPredict />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
            <Route path="/password/reset/confirm/:uid/:token" exact element={<ResetPasswordConfirm />} />
            <Route path="/activate/:uid/:token" exact element={<Activate />} />
            <Route path="/google" exact element={<Google />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}
