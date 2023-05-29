import React from "react";
import  ReactDOM  from "react-dom";


/*
const mensagem1 = <h1>UTILIZANDO React JSX!</h1>;

ReactDOM.render(mensagem1, document.getElementById('root'));
*/

/*
const mensagem = React.createElement( 'h1', {}, 'Não Utilizando JSX:(');

ReactDOM.render (mensagem, document.getElementById ('root'));
*/

/*
const expressoes = <h1>{5+5}</h1>;
ReactDOM.render(expressoes, document.getElementById('root'))
*/

class Curso extends React.Component{
    render(){
        return <p> O curso que faço na Apex é Front-End</p>;
    }
}

class Pessoa extends React.Component{
    render(){

        return(
        <div>
        return<h1>Olá, meu nome é Nathalia</h1>
        <Curso/>
        </div>
        );
    }
}
ReactDOM.render(<Pessoa/>, document.getElementById('root'))