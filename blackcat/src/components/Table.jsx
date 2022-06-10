import React, { useEffect } from "react";
import { VscTrash } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";

import products from "../products";
import { getTableRequest } from "../redux/table";

function Table() {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.selected);
  const tableProducts = useSelector((state) => state.table);
  console.log("TABLE PRODUCTS", tableProducts);
  console.log("SELECTED", arr);

  useEffect(() => {
    arr.map((item) => {
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
              <th>${products[1].precio * 5 * arr.length}</th>
            </tr>
          </tfoot>
          {arr.map((item) => (
            <tbody>
              <tr>
                <th>
                  <figure>
                    <img width={50} src={products[1].img} alt="cake" />
                  </figure>
                </th>
                <th>{products[1].name}</th>
                <th>{5}</th>
                <th>${products[1].precio}</th>
                <th>{<VscTrash class="is-clickable" />}</th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Table;
