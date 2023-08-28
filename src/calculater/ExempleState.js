import React from "react";
class ExempleState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Cin:"AA51951",
            Nom:"Youness",
            Age:"23",
            Ville:"Rabat",

        };
    }
    render(){
        return(
            <div>
                <h1>CIN:{this.state.Cin}</h1>
                <h1>Je mappel:{this.state.Nom}</h1>
                <h1>J ai:{this.state.Age}</h1>
                <h1>j habite a:{this.state.Ville}</h1>
                <button onClick={this.info.bind(this)}>bonjour</button>
                <button onClick={()=>{alert('je mappel youness')}}>click</button>
            </div>
        )
    }
    info(){
        console.log('bonjour');
        
    }
};
export default ExempleState;