import { configureStore, createSlice } from "@reduxjs/toolkit";

const personneStore = createSlice({
    name:"test",
    initialState:[
        {
            "userId": 1,
            "id": "2",
            "title": "el mabchour",
            "completed": false
          },
    ],
    reducers:{
        toggelPerson:(state,action)=>{
            const change=state.find(val=>val.completed !=action.payload)
            change.completed =! change.completed
        }
    }

});

export const store=configureStore({
    reducer:{
        test:personneStore.reducer
    },
})