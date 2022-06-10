import React from "react";
import { VscTrash } from "react-icons/vsc";

import products from "../products";

function CartItem() {
  const handleDelete = () => {
    console.log("DELETED");
  };
  return (
    <div>
      <div class="box">
        <div class="columns is-multiline">
          <div class="column is-flex-direction-row is-4">
            <figure class="image is-rounded ">
              <img class="is-rounded" src={products[1].img} alt="torta" />
            </figure>
          </div>
          <div class="column is-6">
            <p class="title is-6 has-text-weight-light">{products[1].name}</p>
            <p class="title is-6">${products[1].precio}</p>
          </div>
          <div class="column is-1">
            <VscTrash class="is-justify-content-end" onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
