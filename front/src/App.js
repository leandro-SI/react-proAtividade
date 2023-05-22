import { useEffect, useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista'
import api from './api/atividade';

let inicialState = [
    {
        id: 1,
        prioridade: '3',
        titulo: 'Estudar React',
        descricao: 'Primeira Atividade'
    },
    {
        id: 2,
        prioridade: '2',
        titulo: 'Estudar Microserviços',
        descricao: 'Segunda Atividade'
    }
];

function App() {

    const [showAtividadeModal, setShowAtividadeModal] = useState(false);
    const [smShowConfirmmModal, setSmShowConfirmmModal] = useState(false);

    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });

    const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal)

    const handleConfirmModal = (id) => {

        if (id != 0 && id != undefined) {
            const atividade = atividades.filter((a) => a.id == id)
            setAtividade(atividade[0]);

        }
        else {
            setAtividade({ id: 0 });
        }
        setSmShowConfirmmModal(!smShowConfirmmModal);
    };

    const getAllAtividades = async () => {
        const response = await api.get('Atividade');
        return response.data;
    }

    const novaAtividade = () => {
        setAtividade({ id: 0 });
        handleAtividadeModal();
    }

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await getAllAtividades();
            if (todasAtividades) setAtividades(todasAtividades);
        };
        getAtividades();
    }, [])

    const addAtividade = async (ativ) => {
        handleAtividadeModal();
        const response = await api.post('Atividade', ativ);
        setAtividades([...atividades, response.data]);
    };

    function cancelarAtividade() {
        setAtividade({ id: 0 });
        handleAtividadeModal();
    }

    const atualizarAtividade = async (ativ) => {
        handleAtividadeModal();
        const response = await api.put(`Atividade/${ativ.id}`, ativ);
        const { id } = response.data;

        setAtividades(atividades.map((item) => item.id == id ? response.data : item));
        setAtividade({ id: 0 });
    }

    const deletarAtividade = async (id) => {
        handleConfirmModal(0);
        const response = await api.delete(`Atividade/${id}`);

        if (response) {
            const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
            setAtividades([...atividadesFiltradas]);
        }
    };

    function pegarAtividade(id) {
        const atividade = atividades.filter((a) => a.id == id)
        setAtividade(atividade[0]);

        handleAtividadeModal();
    }

    return (

        <>

            <div className='d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1'>
                <h1 className='m-0 p-0'>
                    Atividade
                </h1>
                <Button variant="outline-secondary" onClick={novaAtividade}>
                    <i className='fas fa-plus'></i>
                </Button>
            </div>

            <AtividadeLista
                atividades={atividades}
                handleConfirmModal={handleConfirmModal}
                pegarAtividade={pegarAtividade}
            />

            <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Atividade {atividade.id != 0 ? atividade.id : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AtividadeForm
                        addAtividade={addAtividade}
                        cancelarAtividade={cancelarAtividade}
                        atualizarAtividade={atualizarAtividade}
                        atividadeSelecionada={atividade}
                        atividades={atividades}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                size='sm-2'
                show={smShowConfirmmModal}
                onHide={handleConfirmModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluindo Atividade{' '}
                        {atividade.id != 0 ? atividade.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente Excluir a Atividade {atividade.id}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <button className='btn btn-outline-success me-2' onClick={() => deletarAtividade(atividade.id)}>
                        <i className='fas fa-check me-2'></i>
                        Sim
                    </button>
                    <button className='btn btn-danger me-2' onClick={() => handleConfirmModal(0)}>
                        <i className='fas fa-times me-2'></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal >

        </>
    );
}

export default App;
