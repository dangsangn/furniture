import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  DELETE_LIST_CART_ORDERED,
  UPDATE_QUANTITY_CART_ITEM,
} from "../constants/user";

const cart = JSON.parse(localStorage.getItem("cart_shoe"));
let initialValue = cart ? cart : [];

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      const { data } = action.payload;
      const indexAdd = state.findIndex(
        (item) =>
          item.id === data.id &&
          item.size === data.size &&
          item.color === data.color
      );
      if (indexAdd === -1) {
        state.unshift(action.payload.data);
      } else {
        state[indexAdd].quantity += data.quantity;
      }
      localStorage.setItem("cart_shoe", JSON.stringify(state));
      return [...state];

    case UPDATE_QUANTITY_CART_ITEM:
      const { id, quantity, color, size } = action.payload;
      const indexUpdate = state.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );
      state[indexUpdate].quantity = quantity;
      localStorage.setItem("cart_shoe", JSON.stringify(state));
      return [...state];

    case DELETE_CART_ITEM:
      const indexDelete = state.findIndex(
        (item) => item.id === action.payload.data
      );
      state.splice(indexDelete, 1);
      localStorage.setItem("cart_shoe", JSON.stringify(state));
      return [...state];

    case DELETE_LIST_CART_ORDERED:
      action.payload.data.forEach((itemOrder) => {
        let indexDel = state.findIndex(
          (itemCart) =>
            itemCart.id === itemOrder.product.id &&
            itemCart.size === itemOrder.product.size &&
            itemCart.color === itemOrder.product.color
        );
        state.splice(indexDel, 1);
      });
      localStorage.setItem("cart_shoe", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
