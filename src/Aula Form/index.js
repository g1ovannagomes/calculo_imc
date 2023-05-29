import React from "react";
import ReactDOM  from "react-dom";
import Formulario from "./formulario";
import Tabelinha from "./tabelinha";
import Texto from "./texto";
import Video from "./video";
import Calendario from "./calendario";

const atividade= (

     <div>
        <Formulario />
        <Texto />
        <Tabelinha />
        <Video />
        <Calendario />
    </div>
 )
 ReactDOM.render (atividade, document.getElementById('root'))
 
