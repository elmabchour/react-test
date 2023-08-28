import React from "react";
class Compteurr extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:this.props.x,

        }

    }
    render(){
        return(
            <div>
                <p>{this.state.a} youness</p>
                <input type="button" value='incremonter'onClick={this.copmter}></input>
            </div>
        )
    }
    copmter=()=>{
       this.setState(
        {
            a:this.state.a+eval(this.props.y)
        }
       )
    }
}
export default Compteurr