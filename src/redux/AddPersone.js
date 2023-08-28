import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPersone } from "./Store";


function AddPerson(){
    const noveau=useSelector((state)=>state.Persone);
    const dispatch=useDispatch();
    const Idr=useRef;
    const Nomer=useRef;
    const PreNomer=useRef;
    const Marier=useRef;
    const Viller=useRef;
    
    

    return(
        <div>
            <form>
            <label className="form-label">Id</label>
            <input className="form-control" type='text' placeholder="Id" ref={Idr}/><br />
            <label className="form-label">Nome</label><br />
            <input className="form-control" type='text' placeholder="Nome" ref={Nomer} ></input><br />
            <label className="form-label">PreNome</label>
            <input className="form-control" type='text' placeholder="PreNome" ref={PreNomer}></input><br />
            <label className="form-label">Marie</label>
            <input className="form-check-input" type="checkbox" ref={Marier} ></input><br />
            <select className="form-select form-select-lg mb-3" ref={Viller}>
                        <option>Rabat</option>
                        <option>CasaBlanca</option>
                        <option>Fes</option>
                        <option>Tanger</option>
            </select><br />
            <input type='button' value="ajouter" className="btn btn-outline-primary mt-2" onClick={()=>
            dispatch(AddPersone({
                id:Idr.current.value,
                Nome:Nomer.current.value,
                PreNome:PreNomer.current.value,
                Marie:Marier.current.value,
                Ville:Viller.current.value
                }))}/>
            </form>
        </div>
    )
}
export default AddPerson