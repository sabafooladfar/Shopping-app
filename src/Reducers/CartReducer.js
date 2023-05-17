const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity == 1) {
        const filteredProducts = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredProducts,
          total: state.total - action.payload.offPrice,
        };
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }
    case "SET_CART":
      return action.payload;
    default:
      return state;
  }
};
export default cartReducer;
