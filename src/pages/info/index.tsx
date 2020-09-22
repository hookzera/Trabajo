import { Component } from "react";
import React from 'react';
import {Title,Ip,Botao} from './style'


const Info: React.FC = () => {
    return (
        <>
        <Title>
            Detalhes do IP
        </Title>
        <Ip>
           <ul>
               <li>
                 IP Pesquisado <br/>
                179.162.204.46
               </li><br/><br/>
               <li>
                   Pais <br/> Brasil
               </li><br/><br/>
               <li>
                    Regiao <br/> RJ
               </li><br/><br/>
               <li>
                   Cidade <br/> Volta Redonda
               </li><br/><br/>
                <li>
                    Latitude <br/> -22.4899
                </li><br/><br/>
                <li>
                    Longitude <br/> -44.1955
                </li><br/><br/>

           </ul>

        </Ip>
        <Botao>
            <a href="/?">Voltar</a>

        </Botao>





        </>


    )
};


export default Info;