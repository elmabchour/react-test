import React from "react";
class Compteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            A:0 ,
            B:0
        }
    }
    render(){
        return(
            <div>
                <p style={{color:"white",backgroundColor:"red",border:"2px solid black",borderRadius:"20px"}}>{this.state.A}</p>
                <p style={{color:"white",backgroundColor:"red",border:"2px solid black",borderRadius:"20px"}}>{this.state.B}</p>
                <input type="button" value='click'onClick={this.compter.bind(this)}></input>
                
            </div>
        )
    }
    compter(){             //une methode 
        this.setState(compteur => {       
            return{
                A:compteur.A+1,
                B:compteur.B-1,

            }
        })

    }
}
export default Compteur;




















// funct=()=>{
    
// }
