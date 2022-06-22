import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {})(CartDropdown);
