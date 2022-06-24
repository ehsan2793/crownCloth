import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selecCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)


export const selectCartCount = createSelector(
    [selecCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)

)


