import React, { useState } from 'react'
import TitlePage from '../../components/TitlePage';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useHistory } from 'react-router-dom';

const clientes = [
    {
        id: 1,
        nome: 'Microsoft',
        responsavel: 'Notorio',
        contato: '3536345636',
        situacao: 'Ativo'
    },
    {
        id: 2,
        nome: 'Amazon',
        responsavel: 'Big Mike',
        contato: '645645774',
        situacao: 'Em Análise'
    },
    {
        id: 3,
        nome: 'Google',
        responsavel: 'Omarion',
        contato: '565466464',
        situacao: 'Ativo'
    },
    {
        id: 4,
        nome: 'Facebook',
        responsavel: 'Otto',
        contato: '2425646333',
        situacao: 'Desativado'
    },
    {
        id: 5,
        nome: 'Oracle',
        responsavel: 'Jack',
        contato: '0023434324',
        situacao: 'Ativo'
    }
]

export default function ClienteLista() {

    const history = useHistory();
    const [termoBusca, setTermoBusca] = useState('');

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value);

        console.log('Termo Busca: ', termoBusca)

    };

    const clientesFiltrados = clientes.filter((cliente) => {
        return Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase());
        // cliente.nome.toLocaleLowerCase().indexOf(termoBusca) != -1 || 
        // cliente.responsavel.toLocaleLowerCase().indexOf(termoBusca) != -1           

    });

    const novoCliente = () => {
        history.push('/cliente/detalhe');
    }


    return (
        <>
            <TitlePage title='Cliente Lista'>
                <Button variant='outline-secondary' onClick={novoCliente}>
                    <i className='fas fa-plus me-2'></i>
                    Novo Cliente
                </Button>
            </TitlePage>
            <InputGroup className="mb-3 mt-3">
                <InputGroup.Text>
                    Buscar
                </InputGroup.Text>
                <Form.Control onChange={handleInputChange} placeholder='Buscar por nome do cliente' />
            </InputGroup>
            <table className="table table-striped table-hover">
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Responsável</th>
                        <th scope="col">Contato</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button className='btn btn-sm btn-outline-primary me-2'
                                        onClick={() => history.push(
                                            `/cliente/detalhe/${cliente.id}`
                                        )}
                                    >
                                        <i className='fas fa-user-edit me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger me-2'>
                                        <i className='fas fa-user-times me-2'></i>
                                        Desativar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
