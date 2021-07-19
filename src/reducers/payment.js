import { GET_LIST_PAYMENT_USER_SUCCESS } from "../constants/user";

let initialValue = [];

const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_LIST_PAYMENT_USER_SUCCESS:
      const listOrder = action.payload.data;
      let result = [];
      listOrder.forEach((listItem) => {
        let temp = listItem.listPayment.map((item) => {
          return {
            id: item.product.id,
            name: item.product.name,
            size: item.product.size,
            image: item.product.img,
            color: item.product.color,
            price: item.price,
            quantity: item.quantity.quantity,
            total: item.total,
            time: new Date(listItem.createdAt)
              .toJSON()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("/"),
          };
        });
        result = result.concat(temp);
      });
      return [...result].reverse();
    default:
      return state;
  }
};

export default myReducer;
