import styled from 'styled-components';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';

export const Title = styled.h1`
color: #ef3894;
font-size: 39px;
text-align: center;
`;

export const Ip = styled.h2`
font-size:19px;
text-align: center;
padding-top: 120px;

`;
export const Botao = styled.div`

 a{


        margin-left: 420px;
        padding: 14px;
        background: #56135a;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        @media(max-width:500px){
            margin-left: 120px;

        }

        &:hover {
            background:  #ed3a94;
        }


 }

`;

