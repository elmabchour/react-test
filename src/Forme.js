import React from "react";
class Forme extends React.Component {
    constructor(props) {
        super(props);
        this.nomInput = React.createRef();

        this.aRef = React.createRef();
        this.bRef = React.createRef();

        this.state={
            resault:''
        }

    }
    render() {
        return (
            <div>
                <p>Entre votre nom nom:</p>
                <input type='text' id='nom' ref={this.nomInput}></input><br/>
                <input type='button' value='afficher' onClick={this.aficher}></input><br/>
                <label id="name">for:</label>
                <hr/>
                <div>
                    A:<input ref={this.aRef}/>
                    B:<input ref={this.bRef}/>
                    <input type='button' value='submite' onClick={this.somme}></input>
                    <lable>Votre Somme est:{this.state.resault}</lable>

                </div>
                <hr/>
                <div>
                    <h1>Forms + Event</h1>
                    A: <input name='a' onChange={this.setA} /><br />
                </div>
            </div>
        )
    }
    aficher=()=>{
        console.log(this.nomInput.current.value)
    }
    somme =()=>{
        this.setState({resault:eval(this.aRef.current.value)+eval(this.bRef.current.value)})
    }
    setA = (event) =>{
        console.clear();
        console.log(event);
    }
}
export default Forme;