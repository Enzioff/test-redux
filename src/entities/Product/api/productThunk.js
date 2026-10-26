import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";

export const fetchAnalogues = createAsyncThunk(
  'products/fetchAnalogues',
  async ({number, brand}, thunkAPI) => {
    try {
      const response = await $api.get('/hsprice/', {
        params: {
          number,
          brand,
          analogues: 'on',
        },
        signal: thunkAPI.signal
      })
      
      return response.data
    } catch (error) {
      if (thunkAPI.signal.aborted) {
        throw error;
      }
      
      return thunkAPI.rejectWithValue('Ошибка загрузки аналогов')
    }
  }
)
