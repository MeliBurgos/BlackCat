import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Corporate from "./components/Corporate";
import CartGrid from "./components/CartGrid";
import DetailsCard from "./components/DetailsCard";
import Table from "./components/Table";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import { postMeRequest } from "./redux/login";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(postMeRequest());
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Grid />} />
        <Route path="/pedidos/:productId" element={<DetailsCard />} />
        <Route path="/empresariales" element={<Corporate />} />
        <Route
          path="/carrito"
          element={
            <>
              <Table />
            </>
          }
        />
        <Route path="/singup" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
