import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

let arrProducts = [];
export const getSelectedProductsRequest = createAsyncThunk(
  "SELECTED_PRODUCT",
  (product) => {
    //arrProducts = [...arrProducts, product];
    if (arrProducts.length === 0) {
      arrProducts = [...arrProducts, product];
    } else {
      arrProducts.forEach((item) => {
        if (item.productId == product.productId) {
          //console.log("ITEM AMOUNT", item.amount);
        }
      });
      arrProducts = [...arrProducts, product];
    }
    console.log(arrProducts);
    return arrProducts;
  }
);

const selectedProductReducer = createReducer([], {
  [getSelectedProductsRequest.fulfilled]: (state, action) => action.payload,
});

export default selectedProductReducer;
