import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartItems = () =>
  createSelector([selectCart], (cart) => cart.items);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart) => cart.items,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
