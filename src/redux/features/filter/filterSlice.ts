import { TFilterInitialState } from '@/type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TFilterInitialState = {
    searchTerm: "",
};


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchTerm: (state, action)=>{
            state.searchTerm = action.payload;
        }
    },
});

export const { setSearchTerm } = filterSlice.actions;

export default filterSlice.reducer;