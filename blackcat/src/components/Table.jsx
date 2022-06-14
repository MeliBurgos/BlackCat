import React, { useEffect } from "react";
import { useState } from "react";
import { VscTrash } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTableRequest, cleanTableRequest } from "../redux/table";

function Table() {
  const dispatch = useDispatch();
  const tableProducts = useSelector((state) => state.table);
  const navigate=useNavigate()
  const [modi,setModi]=useState(false)
  const arrCart= localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[]

  console.log("SOY ARRCART OTRA VEZ",arrCart)
 
  const user= JSON.parse(localStorage.getItem('user'))|| undefined

  
  const handleCheckout=()=>{
    if(user){navigate('/checkout')}
   else{navigate('/login')} 
  }

  // const handleRemove=(item)=>{
  //     arrCart.forEach((element,i)=>{
  //     if(element.productId===item.id){
  //         arrCart.splice(i,1);
  //         localStorage.setItem('cart', JSON.stringify(arrCart))}
  //         console.log(arrCart)
               
  //     })
  // }

  useEffect(() => {
    dispatch(cleanTableRequest());
    arrCart.forEach((item) => {
      dispatch(getTableRequest(item.productId));
      console.log('LOG DE EFFECT', arrCart)
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
              {/* <th>
                $
                {arrCart.reduce(
                  (acum, obj) => acum + obj.productPrice * obj.amount,
                  0
                )}
              </th> */}
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
                {/* <th>{arrCart[index].amount}</th> */}
                <th>${item.price}</th>
                <th>{<VscTrash class="is-clickable"/* onClick={()=>handleRemove(item)}*/ />}</th>
              </tr>
            </tbody>
          ))}
        </table>
        <button class="button" onClick={handleCheckout}>PAGAR</button>
      </div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-6"></div>
      <div class="column py-5"></div>
    </>
  );
}

export default Table;
