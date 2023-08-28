import Somme from "./Somme";
import Power from "./Power";
import Racine from "./Racine";
import './Calculatrice.css';
import ClassSomme from "./ClassSomme";
import ExempleState from "./ExempleState";
import Compteur from "./Compteur";
import Compteurr from "./Comptuerr";
var a=parseInt(prompt('donner une valeur'));
var b=parseInt(prompt('entre la valeur'));
var x=parseInt(prompt('donner une valeur de x'));
var y=parseInt(prompt('donner une  pas'));
function Calculatrice(){
    
    return(
        <div id="calcul">
            <h1>Calculatrice</h1>
            <Somme a={a} b={b}/>
            <Racine a={a} b={b}/>
            <Power a={a} b={b}/>
            <ClassSomme/>
            <ExempleState/>
            <Compteur/>
            <Compteurr x={x} y={y}/>
        </div>
        
    );
}
export default Calculatrice;