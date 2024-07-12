import { TFiltersInitialState } from '@/type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TFiltersInitialState = {
    searchTerm: "",
    categories: [],
    sort: "",
};


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setCategory: (state, action) => {
            if (!state.categories.includes(action.payload)) {
                state.categories.push(action.payload);
            }
        },
        removeCategory(state, action) {
            state.categories = state.categories.filter(
                (category) => category !== action.payload
            );
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        clearFilters: (state) => {
            state.searchTerm = null;
            state.categories = [];
            state.sort = null;
        },
    },
});

export const { setSearchTerm, setCategory, setSort, removeCategory, clearFilters, } = filterSlice.actions;

export default filterSlice.reducer;