import React from "react";
class FormeTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const colores = ['red', 'blue', 'black'];
        const Garage = [{ Nom: 'BMW', Hpower: '500', color: 'reed' }, { Nom: 'Ford', Hpower: '300', color: 'black' }, { Nom: 'audi', Hpower: '600', color: 'green' }]
        return (
            <div>
                <ul>
                    {
                        colores.map((col) => {
                            return <li>{col}</li>
                        })
                    }
                </ul>

                <hr />
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Hpower</th>
                            <th>color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                {
                                    Garage.map((voi)=>{
                                        return <tr><td>{voi.Nom}</td>
                                                    <td>{voi.Hpower}</td>
                                                    <td>{voi.color}</td>
                                               </tr>
                                        
                                    })
                                }
                        </tr>
                    </tbody>
                </table>



            </div>
        )
    }
}


export default FormeTable;