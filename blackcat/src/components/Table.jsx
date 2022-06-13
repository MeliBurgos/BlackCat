import React, { useEffect } from "react";
import { VscTrash } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";

import products from "../products";
import { getTableRequest, cleanTableRequest } from "../redux/table";

function Table() {
  const dispatch = useDispatch();
  let arrCart = useSelector((state) => state.selected);
  const tableProducts = useSelector((state) => state.table);

  if (localStorage.getItem("cart")) {
    arrCart = JSON.parse(localStorage.getItem("cart"));
  }

  useEffect(() => {
    console.log("ARR CART", arrCart);
    dispatch(cleanTableRequest());

    arrCart.forEach((item) => {
      dispatch(getTableRequest(item.productId));
    });
  }, []);

  return (
    <>
      <div class="column py-2"></div>
      <div class="column py-6"></div>
      <div class="column is-6 is-offset-4">
        <table class="table is-hoverable has-background-color2">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>PRECIO</th>
              <th>ELIMINAR</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>TOTAL:</th>
              <th>
                $
                {arrCart.reduce(
                  (acum, obj) => acum + obj.productPrice * obj.amount,
                  0
                )}
              </th>
            </tr>
          </tfoot>
          {tableProducts.map((item, index) => (
            <tbody>
              <tr>
                <th>
                  <figure>
                    <img width={50} src={item.photo} alt="cake" />
                  </figure>
                </th>
                <th>{item.name}</th>
                <th>{arrCart[index].amount}</th>
                <th>${item.price}</th>
                <th>{<VscTrash class="is-clickable" />}</th>
              </tr>
            </tbody>
          ))}
        </table>
        <button class="button">PAGAR</button>
      </div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-5"></div>
    </>
  );
}

export default Table;
