import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

let arrProducts = [];
let repeted = -1;

export const getSelectedProductsRequest = createAsyncThunk(
  "SELECTED_PRODUCT",
  (product) => {
    if (localStorage.getItem("cart")) {
      arrProducts = JSON.parse(localStorage.getItem("cart"));
    }
    let nuevoArr = [...arrProducts];
    if (arrProducts.length === 0) {
      arrProducts = [...arrProducts, product];
    } else {
      nuevoArr.forEach((item, index) => {
        if (item.productId == product.productId) {
          repeted = index;
        }
      });
      if (repeted !== -1) {
        nuevoArr[repeted] = product;
        arrProducts = nuevoArr;
        repeted = -1;
      } else {
        arrProducts = [...arrProducts, product];
      }
    }

    localStorage.setItem("cart", JSON.stringify(arrProducts));

    return arrProducts;
  }
);

const selectedProductReducer = createReducer([], {
  [getSelectedProductsRequest.fulfilled]: (state, action) => action.payload,
});

export default selectedProductReducer;
