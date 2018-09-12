import React from 'react';
import { Container, Message } from 'semantic-ui-react';

const ErrorLista = ({mensaje}) =>{
    return (
        <Container textAlign='left' style={{width: '400px'}}>
            <br/>
            <Message
            compact
            error
            icon='frown'
            header= 'Error al obtener los datos'
            content={mensaje}/>
        </Container>
    );
}
export default ErrorLista;
