import { configureStore, createSlice } from "@reduxjs/toolkit";



const PersoneStore = createSlice({
    name :"Persone",
    initialState:[],
    reducers:{
        AddPersone:(state,action)=>{
            const newPersone={
                id:Date.now(),
                Nome:action.payload.Nome,
                PreNome:action.payload.PreNome,
                Marie:action.payload.Marie,
                ville:action.payload.ville
            }
            state.push(newPersone)
        },
        TogelPersone:(state,action)=>{
            const Per=state.find((x)=>x.id == action.payload);
            Per.Marie = !Per.Marie;
        },
        DeletPersone: (state,action)=>{
            state=state.filter(t=>t.id!== action.payload);
            return state;
        }
    }
})


export const{AddPersone,TogelPersone,DeletPersone}=PersoneStore.actions;

export const store=configureStore({
    reducer:{
        Persone:PersoneStore.reducer,
    }
});