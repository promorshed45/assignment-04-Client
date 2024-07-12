import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add reducers as needed for local state management
    },
    // extraReducers: (builder) => {
    //     // Add extra reducers here if needed
    // },
});

export const { } = productSlice.actions;

// export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;