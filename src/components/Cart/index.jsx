import Header from "../Header";
import EmptyCartView from "../EmptyCartView";
import CartListView from "../CartListView";
import CartSummary from "../CartSummary";

import "./index.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartList.cartList);
  const dispatch = useDispatch();

  const showEmptyView = cartItems.length === 0;
  const onClickRemoveAllBtn = () => {
    dispatch(removeAllCartItems());
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            <button
              type="button"
              className="remove-all-btn"
              onClick={onClickRemoveAllBtn}
            >
              Remove All
            </button>
            <CartListView />
            <CartSummary />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
