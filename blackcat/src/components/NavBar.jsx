import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";

import { postLogoutRequest, postMeRequest } from "../redux/login";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contador, setContador] = useState();
  const cart = JSON.parse(localStorage.getItem("cart")) || undefined;
  const cont = cart ? cart.reduce((acum, obj) => acum + obj.amount, 0) : 0;

  const user = localStorage.getItem("user");
  const userJson = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(postLogoutRequest());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      class="navbar is-fixed-top has-background-color1"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand ">
        <Link to={"/"}>
          <p class="navbar-item item-is-aling-centered" href="https://bulma.io">
            <img
              src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo.png"
              width={170}
              height={40}
              alt="Logo"
            />
          </p>
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="columns is-multiline">
          <div class="column is-full ">
            <div class="columns mt-3 is-gapless">
              <div class="column is-11 is-relative is-flex ">
                <input class="input" type="text" placeholder="Buscar..." />

                <button class="button">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>

          <div class="column is-full is-flex-direction-row">
            <div class="columns">
              <div class="column">
                <Link to={"/"}>
                  <p class="navbar-item">Inicio</p>
                </Link>
              </div>
              <div class="column">
                <div class="navbar-item has-dropdown is-hoverable">
                  <p class="navbar-link is-tab">Productos</p>

                  <div class="navbar-dropdown">
                    <Link to={"/pedidos"}>
                      <p class="navbar-item">Pastelería</p>
                    </Link>
                    <Link to={"/adicionales"}>
                      <p class="navbar-item">Adicionales</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="column">
                <Link to={"/contacto"}>
                  <p class="navbar-item">Contacto</p>
                </Link>
              </div>
              <div class="column">
                <Link to={"/empresariales"}>
                  <p class="navbar-item">Empresariales</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {user ? (
                <>
                  <div class="column is-flex">
                    <CgProfile size={30} />
                    <p class="subtitle mx-3">Hola {userJson.name}!</p>
                  </div>
                  <p class="button" onClick={handleLogout}>
                    <strong class="has-text-black-bis">Logout</strong>
                  </p>
                </>
              ) : (
                <>
                  <p class="button">
                    <Link to={"/singup"}>
                      <strong class="has-text-black-bis">Sign up</strong>
                    </Link>
                  </p>
                  <Link to={"/login"}>
                    <p class="button">Log in</p>
                  </Link>
                </>
              )}

              <div class="has-text-black-bis">
                <Link to={"/carrito"}>
                  <RiShoppingCart2Line size={30} />
                </Link>
              </div>
              <p>{cont}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
