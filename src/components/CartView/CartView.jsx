import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeOneProduct, removeAll } from "../../redux/action";
import style from "./CartView.module.css";
import Cart from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import { Tooltip } from "flowbite-react";
import { MdOutlineDelete } from "react-icons/md";

export default function CartView() {
  const cartState = useSelector((state) => state.cart);
  const dispach = useDispatch();

  const deleteCart = (id, todos = false) => {
    if (todos) {
      dispach(removeAll(id));
    } else {
      dispach(removeOneProduct(id));
    }
  };
  const limpiarCart = () => {
    dispach(clearCart());
  };

  return (
    <div className={style.content}>
      <NavBar />
      <div className={style.contentCarts}>
        {cartState.map((ele) => {
          return <Cart key={ele.id} data={ele} deleteCart={deleteCart} />;
        })}

        <Tooltip content="Limpiar Carrito">
          <MdOutlineDelete
            onClick={limpiarCart}
            size="40"
            className="  p-1 cursor-pointer mt-10 w-screen"
          />
        </Tooltip>
      </div>
    </div>
  );
}
