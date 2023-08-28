import React from "react";
class FormeState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:''
        };
    }

    changenome=(Nom)=>{
        this.setState({user:Nom.target.value});
    }
    render(){
        return(
            <form>
                
                <p>Entre votre nome:</p>
                <input type='text' onChange={this.changenome}/><br/>
                <label>{this.state.user}</label>
            </form>

        );
    }
}
export default FormeState;
