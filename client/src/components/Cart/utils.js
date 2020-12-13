/* eslint-disable array-callback-return */
export const addItemToCart = (cartItems, itemToAdd) => {
  if (cartItems.find((item) => item.id === itemToAdd.id)) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};
