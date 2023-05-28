import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from '../../api/atividade';
import TitlePage from '../../components/TitlePage';
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm';
import { IAtividade, PrioridadeEnum } from '../../models/atividade';

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

const atividadeInicial: IAtividade = {
    id: 0,
    titulo: '',
    prioridade: PrioridadeEnum.NaoDefinido,
    descricao: ''
}

const Atividade = () => {

    const [showAtividadeModal, setShowAtividadeModal] = useState(false);
    const [smShowConfirmmModal, setSmShowConfirmmModal] = useState(false);

    const [atividades, setAtividades] = useState<IAtividade[]>([]);
    const [atividade, setAtividade] = useState<IAtividade>(atividadeInicial);

    const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal)

    const handleConfirmModal = (id: number) => {

        if (id != 0 && id != undefined) {
            const atividade = atividades.filter((a) => a.id === id)
            setAtividade(atividade[0]);

        }
        else {
            setAtividade(atividadeInicial);
        }
        setSmShowConfirmmModal(!smShowConfirmmModal);
    };

    const getAllAtividades = async () => {
        const response = await api.get('Atividade');
        return response.data;
    }

    const novaAtividade = () => {
        setAtividade(atividadeInicial);
        handleAtividadeModal();
    }

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await getAllAtividades();
            if (todasAtividades) setAtividades(todasAtividades);
        };
        getAtividades();
    }, [])

    const addAtividade = async (ativ: IAtividade) => {
        handleAtividadeModal();
        const response = await api.post('Atividade', ativ);
        setAtividades([...atividades, response.data]);
    };

    function cancelarAtividade() {
        setAtividade(atividadeInicial);
        handleAtividadeModal();
    }

    const atualizarAtividade = async (ativ: IAtividade) => {
        handleAtividadeModal();
        const response = await api.put(`Atividade/${ativ.id}`, ativ);
        const { id } = response.data;

        setAtividades(atividades.map((item) => item.id == id ? response.data : item));
        setAtividade(atividadeInicial);
    }

    const deletarAtividade = async (id: number) => {
        handleConfirmModal(0);
        const response = await api.delete(`Atividade/${id}`);

        if (response) {
            const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
            setAtividades([...atividadesFiltradas]);
        }
    };

    function pegarAtividade(id: number) {
        const atividade = atividades.filter((a) => a.id == id)
        setAtividade(atividade[0]);

        handleAtividadeModal();
    }

    return (

        <>

            <TitlePage
                // novaAtividade={novaAtividade}
                title={'Atividade ' + (atividade.id != 0 ? atividade.id : '')}
            >
                <Button variant="outline-secondary" onClick={novaAtividade}>
                    <i className='fas fa-plus'></i>
                </Button>
            </TitlePage>

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
                    />
                </Modal.Body>
            </Modal>

            <Modal className='sm-2'
                show={smShowConfirmmModal}
                hide={handleConfirmModal}
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

export default Atividade;
