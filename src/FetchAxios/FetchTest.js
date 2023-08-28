import { useState,useEffect } from "react"

function FetchTest() {


    var [dataa, setdataa] = useState([])
    


    const aficher = () => {
        fetch("http://localhost:8000/datass")
            .then((response) => { return response.json() })
            .then((db) => { setdataa(db) })
    }
    useEffect(()=>{
        const a=dataa.filter((x)=>{
            return x.completed !== true 
        })
    },[])
   
        
  


    return (
        <div>
            <center>
                <input type="button" class="btn btn-outline-primary my-4"  value='aficher' onClick={aficher} />

                <form>
                    <table class="table table-bordered">
                        <thead>
                            <tr class="table-primary">
                                <th scope="col">userId</th>
                                <th scope="col">id</th>
                                <th scope="col">title</th>
                                <th scope="col">completed</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataa.map((val) => {
                                    return (
                                        <tr scope="row">
                                            <td>{val.userId}</td>
                                            <td>{val.id}</td>
                                            <td>{val.title}</td>
                                            <td>{'' + val.completed}</td>
                                        </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>
                </form>






            </center>

        </div>







    );







}
export default FetchTest