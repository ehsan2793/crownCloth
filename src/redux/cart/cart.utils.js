export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === existingCartItem.id
                ? { ...item, quantity: cartItemToAdd.quantity + 1 }
                : item
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};





