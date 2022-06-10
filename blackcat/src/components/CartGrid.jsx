import React from "react";
import CartItem from "./CartItem";

function CartGrid() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div class="column py-2"></div>
      <div class="column py-6"></div>
      <div class="column is-half is-offset-one-quarter mt-2">
        <p class="title">TOTAL: </p>
        <div class="columns is-multiline">
          {arr.map((product) => (
            <>
              <div class="column is-one-quarter is-4 ">
                <CartItem />
              </div>
            </>
          ))}
        </div>
      </div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
    </>
  );
}

export default CartGrid;
