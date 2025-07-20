import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeCartItem,
} from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";

const CartListView = () => {
  const cartList = useSelector((state) => state.cartList.cartList);
  console.log(cartList);
  const dispatch = useDispatch();
  const onClickDecrement = (id) => {
    dispatch(decrementCartItemQuantity(id));
  };
  const onClickIncrement = (id) => {
    dispatch(incrementCartItemQuantity(id));
  };
  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <ul className="cart-list">
      {cartList.map((eachCartItem) => (
        <li className="cart-item" key={eachCartItem.id}>
          <img
            className="cart-product-image"
            src={eachCartItem.imageUrl}
            alt={eachCartItem.title}
          />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{eachCartItem.title}</p>
              <p className="cart-product-brand">by {eachCartItem.brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={() => onClickDecrement(eachCartItem.id)}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{eachCartItem.quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={() => onClickIncrement(eachCartItem.id)}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">
                Rs {eachCartItem.price * eachCartItem.quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                onClick={() => onRemoveCartItem(eachCartItem.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={() => onRemoveCartItem(eachCartItem.id)}
            data-testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CartListView;
