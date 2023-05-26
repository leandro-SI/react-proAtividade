import React from 'react'
import TitlePage from '../../components/TitlePage'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate, useParams } from 'react-router-dom';


export default function ClienteForm() {

    const navigate = useNavigate();
    let { id } = useParams();

    const voltarCliente = () => {
        navigate('/cliente/lista');
    }

    return (
        <>
            <TitlePage title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
                <Button variant='outline-secondary' onClick={voltarCliente}>
                    <i className='fas fa-undo me-2'></i>
                    Voltar
                </Button>
            </TitlePage>
            <div></div>
        </>
    )
}
