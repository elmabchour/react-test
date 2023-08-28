import React, { useState } from "react";
function Compteur(){
    var[Cp,setCp]=useState("0")


    return(
        <div>
            <center>
                <h1>bonjour la valeur est : {Cp}</h1>
                <input type='button' value='click her' onClick={()=>{setCp(parseInt(Cp+1))}}></input>
                <input type='button' value='click' onClick={()=>{setCp(parseInt(Cp-1))}}></input>
            </center>
        </div>
    )
}
export default Compteur