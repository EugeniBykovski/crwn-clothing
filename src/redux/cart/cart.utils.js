export const addItemToCart = (cartItems, cartItemToAdd) => {
  // we're going to take a look inside our existing cart items to see if this cart item exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}