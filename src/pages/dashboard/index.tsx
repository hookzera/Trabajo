import { Component } from "react";
import React from 'react';
import {Title, Form, Ip} from './style'


const Dashboard: React.FC = () => {
    return (
        <>
        <Title>
            Busca IP
        </Title>
        <Form>
        <input placeholder="Procure um ip" />
        <button type="submit"><a href="/info">Pesquisar</a> </button>
        </Form>

        </>
    )
};


export default Dashboard;