import { createSelector } from 'reselect'

// Input selector
const selectCart = state => state.cart

// const selectUser = state => state.user

export const selectCartItems = createSelector(
  // [selectCart, selectUser],
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)