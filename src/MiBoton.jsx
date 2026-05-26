import styled from 'styled-components';

const Boton = styled.button`
        background-color: #007bff;
        color: white;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
    `

function MiBoton({texto, onClick}) {
    return <Boton onClick={onClick}>{texto}</Boton>
}

export default MiBoton;