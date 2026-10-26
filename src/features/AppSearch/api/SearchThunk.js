import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";

export const searchItems = createAsyncThunk(
  'products/searchItems',
  async (value, thunkAPI) => {
    try {
      const response = await $api.get('/hsprice/', {
        params: {
          number: value
        }
      })
      
      return response.data
    } catch (error) {
      if (thunkAPI.signal.aborted) {
        throw error;
      }
      
      return thunkAPI.rejectWithValue('Ошибка загрузки товаров')
    }
  }
)
