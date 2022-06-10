import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartContAdd } from "../redux/cartCont";

import { RiShoppingCart2Line } from "react-icons/ri";
import { getSelectedProductsRequest } from "../redux/cart";

const QtySelector = ({ product }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleIncrease = (e) => {
    setValue(value + 1);
  };

  const handleDecrease = (e) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleSubmit = () => {
    dispatch(cartContAdd(value));
    dispatch(
      getSelectedProductsRequest({ productId: product.id, amount: value })
    );
  };

  return (
    <div class="card-footer p-2 is-justify-content-space-between">
      <div>
        <button onClick={(value) => handleDecrease(value)}>-</button>
        <input class="has-text-centered" size="2" value={value} />
        <button onClick={(value) => handleIncrease(value)}> +</button>
      </div>
      <RiShoppingCart2Line onClick={handleSubmit} size={30} color={""} />
    </div>
  );
};
export default QtySelector;
