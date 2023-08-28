import React, { isValidElement, useState } from "react";
function Form() {
    var [Personnes, setPersonnes] = useState([])
    var [Cin, setCin] = useState('')
    var [Nome, setNome] = useState('')
    var [PreNome, setPreNome] = useState('')
    var [Ville, setVille] = useState('')
    var [Marier, setMarier] = useState('')


    return (
        <div>
            <div class="container  my-2">
                
                <form>
                    
                    <label class="form-label">Cin</label>
                    <input class="form-control" type='text' placeholder="Cin" onChange={(e)=>{setCin(e.target.value)}}></input><br />
                    <label class="form-label">Nome</label>
                    <input class="form-control" type='text' placeholder="Nome" onChange={(e)=>{setNome(e.target.value)}} ></input><br />
                    <label class="form-label">PreNome</label>
                    <input class="form-control" type='text' placeholder="PreNome" onChange={(e)=>{setPreNome(e.target.value)}}></input><br />
                    <label class="form-label">Ville</label>
                    <select class="form-select form-select-lg mb-3" onChange={(e)=>{setVille(e.target.value)}}>
                        <option>Rabat</option>
                        <option>CasaBlanca</option>
                        <option>Fes</option>
                        <option>Tanger</option>
                    </select><br />
                    <label class="form-label">Marie</label>
                    <input class="form-check-input" type="checkbox" onChange={(e)=>{setMarier(''+e.target.checked)}}></input><br />
                    <input type="button" class="btn btn-outline-primary my-4"  value="aficher" onClick={()=>{setPersonnes([...Personnes,{Cin,Nome,PreNome,Ville,Marier}])
                    }}/>
                </form>
                <form>
                    <table class="table table-bordered" >
                        <thead>
                            <tr class="table-primary">
                                <th>Cin</th>
                                <th>Nome</th>
                                <th>PreNome</th>
                                <th>Ville</th>
                                <th>Marie</th>
                                <th>Suprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Personnes.map((val,i)=>{
                                    return(
                                        <tr>
                                            <td>{val.Cin+i}</td>
                                            <td>{val.Nome}</td>
                                            <td>{val.PreNome}</td>
                                            <td>{val.Ville}</td>
                                            <td>{val.Marier}</td>
                                            <td><a href="#" onClick={()=>{if(window.confirm('volez vour sure suprimer')==true)
                                            {
                                             var pos=Personnes.findIndex((iteam)=>{return val.cin == iteam.Cin}) ;
                                             var t=[...Personnes];
                                             t.splice(pos,1);
                                             setPersonnes(t)
                                            }
                                            }}>suprimer</a></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <input type="button" class="btn btn-outline-primary my-4"  value='trier' onClick={()=>{
                        let P=[...Personnes];
                        let T=P.filter((x)=>{return x.Marier == 'true'})
                        setPersonnes(T)
                    }}/>
                </form>
            </div>
        </div>
    )



}
export default Form