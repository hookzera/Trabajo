import styled from 'styled-components';

export const Title = styled.h1`
color: #ef3894;
font-size: 50px;
margin-top:250px;
`;

export const Form = styled.form `
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #56135a;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background:  #ed3a94;
        }
    }`
;

export const Ip = styled.h2`
font-size:40px;
`;