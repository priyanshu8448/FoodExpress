import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      let indx = state.items.findIndex((obj)=>obj.id===action.payload.id);
      if(indx!=-1){
        state.items[indx].quantity = state.items[indx].quantity + 1;
      }
      else{
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
      
      //output of actionName() function (for example addItems() used in Dish.js) is an object named action
      //action:{payload:argument of actionName() function}
    },
    removeItem: (state, action) => {
      let indx = state.items.findIndex((obj)=>obj.id===action.payload.id);

      if(state.items[indx].quantity>1){
        state.items[indx].quantity = state.items[indx].quantity - 1;
      }
      else{
        state.items.splice(indx,1);
      }
      
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
      //state = []; this will not work
    },
  },
});

export const { addItems, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
