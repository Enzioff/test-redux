import {createSlice} from "@reduxjs/toolkit";
import {fetchAnalogues} from "entities/Product/api/productThunk";
import {searchItems} from "features/AppSearch/api/SearchThunk";

const initialState = {
  items: [],
  analogues: [],
  selectedItem: null,
  loadingItems: false,
  loadingAnalogues: false,
  error: null,
  currentRequestId: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    removeSelectedItem: (state) => {
      state.selectedItem = null;
      state.analogues = [];
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchItems.pending, (state, action) => {
        state.loadingItems = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(searchItems.fulfilled, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        
        state.loadingItems = false;
        state.items = action.payload.goods;
        state.error = action.payload.error;
        
        if (action.payload.goods?.every(el => el.brand.length === 0)) {
          state.error = 'По указанному артикулу ничего не найдено'
          state.items = [];
        }
        
        state.currentRequestId = null;
      })
      .addCase(searchItems.rejected, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        
        state.loadingItems = false
        state.error = action.payload ?? action.payload.error
        state.currentRequestId = null;
      })
      .addCase(fetchAnalogues.pending, (state, action) => {
        state.loadingAnalogues = true;
        state.error = null;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(fetchAnalogues.fulfilled, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        
        state.loadingAnalogues = false;
        state.analogues = action.payload.goods[0].analogues;
        state.selectedItem = action.payload.goods[0].brand
        
        state.currentRequestId = null;
      })
      .addCase(fetchAnalogues.rejected, (state, action) => {
        if (state.currentRequestId !== action.meta.requestId) return;
        
        state.loadingAnalogues = false
        state.error = action.payload ?? action.error.message
        state.currentRequestId = null;
      })
  }
})

export const {removeSelectedItem, setSelectedItem} = productsSlice.actions;
export const reducer = productsSlice.reducer;
