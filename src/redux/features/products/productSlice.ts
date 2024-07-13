import { TProductInitialState } from "@/type";
import { createSlice } from "@reduxjs/toolkit";



const initialState: TProductInitialState = {
  product: {
    name: "",
    price: 0,
    category: "",
    description: "",
    stock: 0,
    image: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;