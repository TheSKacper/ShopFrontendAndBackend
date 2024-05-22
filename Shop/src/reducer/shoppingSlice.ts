import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../model/product';

interface ShopState {
  shopping: Product[];
  totalPrice: number;
  quantity: Record<string, number>;
}

const initialState: ShopState = {
  shopping: [],
  totalPrice: 0,
  quantity: {},
};

const shopSlice = createSlice({
  name: 'Shop',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const { id, price } = action.payload;
      const existedQuantity = state.quantity[id] || 0;

      if (existedQuantity === 0) {
        state.shopping.push(action.payload);
      }
      state.totalPrice += price;
      state.quantity[id] = existedQuantity + 1;
    },
    deleteProduct(state, action: PayloadAction<{ id: string; price: number }>) {
      const { id, price } = action.payload;

      state.shopping = state.shopping.filter((item) => item.id !== id);

      state.totalPrice -= price;
      delete state.quantity[id];
    },

    deleteQuantity(state,action:PayloadAction<{id:string,price:number}>)
    {
        const { id, price } = action.payload;
        const currentQuality = state.quantity[id]

       if(currentQuality)
        {
            state.quantity[id] = currentQuality - 1
            state.totalPrice -= price
        }

        if (state.quantity[id] === 0) {
            state.shopping = state.shopping.filter(item => item.id !== id);
            delete state.quantity[id];
        }
    },
    addQuantity(state,action:PayloadAction<{id:string,price:number}>)
    {
        const {id,price} = action.payload
        const currentQuality = state.quantity[id] || 0
        
                state.quantity[id] = currentQuality + 1
                state.totalPrice += price
    }
  },
});

export const { addProduct, deleteProduct,deleteQuantity,addQuantity } = shopSlice.actions;
export default shopSlice.reducer;
