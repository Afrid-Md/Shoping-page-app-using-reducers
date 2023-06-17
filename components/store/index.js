import {configureStore, createSlice} from '@reduxjs/toolkit';


const initialCartState = {
    cartItems : [],
}
const cartSlice = createSlice({
    name : 'store',
    initialState : initialCartState,
    reducers : {
        addItemToCart(state, action){

            const existingCartItemIndex = state.cartItems.findIndex((product) => product.title === action.payload.item.title);
            

            const existingItem = state.cartItems[existingCartItemIndex];

            let updatedItems;
            if(existingItem){
                const updatedItem = {
                    ...existingItem, quantity : existingItem.quantity + 1
                }

                updatedItems = [...state.cartItems];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            else{
                updatedItems = state.cartItems.concat({...action.payload.item})
            }
            state.cartItems = updatedItems
        },

        removeItemFromCart(state, action){
            const existingCartItemIndex = state.cartItems.findIndex((product) => product.id === action.payload.id);

            const existingItem = state.cartItems[existingCartItemIndex];

            let updatedItems;
            if(existingItem.quantity > 1){
                const updatedItem = {
                    ...existingItem, quantity : existingItem.quantity -1
                }

            updatedItems = [...state.cartItems];
            updatedItems[existingCartItemIndex] = updatedItem; 
            }
            else{
                updatedItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            }

            state.cartItems = updatedItems;
        }
    } 
})

const store = configureStore({
    reducer : {cart :cartSlice.reducer}
})

export const cartActions = cartSlice.actions;

export default store;