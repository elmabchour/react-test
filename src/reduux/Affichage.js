import React from "react";
import { useSelector } from "react-redux";

const Affichage=()=>{
    const noveau=useSelector((state)=>state.test)
    return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <th>USERId</th>
                    <th>ID</th>
                    <th>TEXT</th>
                    <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                {
                    noveau.map((val)=>{
                        return(
                            <tr>
                                <td>{val.userId}</td>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>{''+val.completed}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        </>
    );
};

export default Affichage;