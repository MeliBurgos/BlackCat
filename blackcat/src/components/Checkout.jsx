import axios from "axios";
import React from "react";

function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SOY USER", user);
    console.log("SOY CART", cart);

    axios.post("http://localhost:3001/api/order/buy", {
      data: [user.id, user.email, cart],
    });
  };

  return (
    <div>
      <div class="py-6"></div>
      <div class="py-3"></div>
      <div class="columns is-multiline">
        <div class="column is-6 is-offset-3 ">
          <div class="column is-6 is-offset-3">
            <picture class="image">
              <img
                class="mb-6"
                src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo/.png"
                alt="Logo"
              />
            </picture>
          </div>
          <form onSubmit={handleSubmit}>
            <p class="title">Datos de contacto:</p>
            <input class="input mb-6" type="text" placeholder="Email" />
            <p class="title">Datos de entrega:</p>
            <label class="checkbox mb-6">
              <input type="checkbox" />
              Retiro por local (GRATIS)
            </label>
            <p class="subtitle">Entrega a domicilio:</p>
            <p class="subtitle-6 is-italic">Ingrese datos de su domicilio</p>
            <input class="input mb-6" type="text" placeholder="Dirección" />
            <p class="subtitle-6 is-italic">
              Datos útiles para envío exitoso (opcional)
            </p>

            <textarea class="textarea mb-6" type="text" placeholder="mensaje" />

            <p class="title">Datos de facturación:</p>
            <p class="subtitle-6 is-italic mb-4">
              Persona que pagará el pedido
            </p>
            <input class="input mb-4" type="text" placeholder="Nombre" />
            <input class="input mb-4" type="text" placeholder="Apellido" />
            <input class="input mb-6" type="text" placeholder="Teléfono" />
            <p class="subtitle-6 is-italic mb-4">
              Persona que retirará el pedido
            </p>
            <input class="input mb-4" type="text" placeholder="Nombre" />
            <input class="input mb-4" type="text" placeholder="Apellido" />
            <input class="input mb-6" type="text" placeholder="Teléfono" />
            <div>
              <button class="button is-black is-pulled-right">Pagar</button>
            </div>
          </form>
        </div>
      </div>
      <div class="py-6"></div>
      <div class="py-6"></div>
      <div class="py-6"></div>
    </div>
  );
}

export default Checkout;
