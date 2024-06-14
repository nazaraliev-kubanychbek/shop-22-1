import {createAction, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';


const intitialState = {
   products: [],
   categories: [],
   cart: [],
}

export const getCategories = () =>{
    let action = createAction('GET_CATEGORIES');
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data})=> {
           dispatch(action(data))
        })
    }
};

export const addCart = createAction('ADD_CART');

export default createReducer(intitialState, (builder)=>{
        builder
        .addCase('GET_CATEGORIES',(state, action)=>{
            state.categories = action.payload
        })
        .addCase('ADD_CART', (state, action)=>{
            const product = action.payload;
            const idx = state.cart.findIndex((item)=>{
                return item.id === product.id
            });
            if(idx > -1){
                state.cart[idx].count++;
                state.cart = [...state.cart];
            } else{
                state.cart = [{
                    ...product,
                    count: 1
                }, ...state.cart]
            }
        })
})











// import { createAction, createReducer } from '@reduxjs/toolkit';


// const intitialState = {
//     num: 0,
//     text: 'Hello World!',
// }

// export const incrementNum = createAction('INCREMENT_NUM');
// export const decrementNum = createAction("DECREMENT_NUM");
// export const resetNum = createAction('RESET_NUM');
// export const setText = createAction('SET_TEXT');

// export default createReducer(intitialState, (builder) => {
//     builder
//         .addCase('INCREMENT_NUM', (state, action) => {
//             if(state.num < 20){
//                 state.num = state.num + 1
//             } else {
//                 state.num = 20
//             }
//         })
//         .addCase('DECREMENT_NUM', (state, action) => {
//             if (state.num > 0) {
//                 state.num = state.num - 1
//             } else {
//                 state.num = 0
//             }
//         })
//         .addCase('RESET_NUM', (state, action)=>{
//             state.num = 0
//         })
//         .addCase("SET_TEXT", (state, action)=>{
//             state.text = action.payload
//         })
// })
