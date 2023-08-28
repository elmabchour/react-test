import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { DeletPersone, TogelPersone } from "./Store";



function ListPersone() {
    const list = useSelector((state) => state.Persone)
    const dispatch = useDispatch();
    return (
        <div>
            <form>
                <table className="table table-bordered" >
                    <thead>
                        <tr className="table-primary">
                            <th>Id</th>
                            <th>Nome</th>
                            <th>PreNome</th>
                            <th>Marie</th>
                            <th>Ville</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((val) => {
                                return (
                                    <tr key={val.Id}>
                                        <td>{val.Id}</td>
                                        <td>{val.Nome}</td>
                                        <td>{val.PreNome}</td>
                                        <td>{'' + val.Marie}</td>
                                        <td>{val.Ville}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary m-1"
                                                onClick={() => dispatch(TogelPersone(val.id))}>Toggel</button>
                                            <button type="button" className="btn btn-secondary m-1"
                                                onClick={() => {
                                                    if (window.confirm('are you sure')) { dispatch(DeletPersone(val.id)) }
                                                }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </form>

        </div>
    )
}
export default ListPersone