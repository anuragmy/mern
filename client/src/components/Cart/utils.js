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

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const decQuantity = (cartItems, itemToDecQuantity) => {
  const isPresent = cartItems.find((item) => item.id === itemToDecQuantity.id);
  if (isPresent) {
    if (itemToDecQuantity.quantity === 1) {
      return cartItems.filter((item) => item.id !== itemToDecQuantity.id);
    } else
      return cartItems.map((item) =>
        item.id === itemToDecQuantity.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
  }
};

export const incQuantity = (cartItems, itemToIncQuantity) => {
  return cartItems.map((item) =>
    item.id === itemToIncQuantity.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};
