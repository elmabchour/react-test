import React from "react";
import { Provider } from "react-redux";
import ListPersone from "./ListPersone";
import AddPerson from "./AddPersone"
import {store } from "./Store";



function Appell(){
    return(
        <Provider store={store}>
            <AddPerson/>
            <ListPersone/>
        </Provider>
    )
} 
export default Appell;