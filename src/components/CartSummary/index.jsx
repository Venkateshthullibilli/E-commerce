import "./index.css";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartList = useSelector((state) => state.cartList.cartList);
  let total = 0;
  cartList.forEach((eachCartItem) => {
    total += eachCartItem.price * eachCartItem.quantity;
  });

  return (
    <>
      <div className="cart-summary-container">
        <h1 className="order-total-value">
          <span className="order-total-label">Order Total:</span> Rs {total}
          /-
        </h1>
        <p className="total-items">{cartList.length} Items in cart</p>
        <button type="button" className="checkout-button d-sm-none">
          Checkout
        </button>
      </div>
      <button type="button" className="checkout-button d-lg-none">
        Checkout
      </button>
    </>
  );
};

export default CartSummary;
