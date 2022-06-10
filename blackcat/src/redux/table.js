import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getTableRequest = createAsyncThunk("TABLE", (id) => {
  return axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then((res) => res.data);
});

const tableReducer = createReducer([], {
  [getTableRequest.fulfilled]: (state, action) => action.payload,
});

export default tableReducer;
