/* eslint-disable array-callback-return */
export const addItemToCart = (items, itemToAdd) => {
  const itemExists = items.find((item) => item.id === itemToAdd.id);
  if (itemExists) {
    return items.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : itemToAdd
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};
