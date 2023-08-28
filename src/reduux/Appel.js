import React from "react";
import { Provider } from "react-redux";
import Affichage from "./Affichage";
import { store } from "./store";

const Appel=()=>{
    return(
       <Provider store={store}>
        <Affichage/>
       </Provider>
    );
};

export default Appel;