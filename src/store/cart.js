import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
}

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state) => {
      const carts = JSON.parse(localStorage.getItem("carts"))
      if (carts) {
        state.list = carts
      }
    },
    addCart: (state, action) => {
      const indexExistCart = state.list.findIndex(
        (item) => item?.id === action.payload?.data?.id
      )
      if (indexExistCart !== -1) {
        state.list[indexExistCart].order += action.payload?.order
      } else {
        state.list = [
          { ...action.payload?.data, order: action.payload?.order },
          ...state.list,
        ]
      }
      localStorage.setItem("carts", JSON.stringify(state.list))
    },
    updateCart: (state, action) => {
      state.list[action.payload?.index]["order"] =
        action.payload?.order > state.list[action.payload?.index]["qty"]
          ? state.list[action.payload?.index]["qty"]
          : action.payload?.order
      localStorage.setItem("carts", JSON.stringify(state.list))
    },
    deleteCart: (state, action) => {
      const newList = [...state.list]
      const listIndex = action.payload
      for (let i = (listIndex || []).length - 1; i >= 0; i--) {
        newList.splice(listIndex[i], 1)
      }
      console.log("newList", newList)
      state.list = newList
      localStorage.setItem("carts", JSON.stringify(newList))
    },
  },
})

export const { getCart, addCart, updateCart, deleteCart } = cart.actions

export default cart.reducer
