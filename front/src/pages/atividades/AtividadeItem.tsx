import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { IAtividade, PrioridadeEnum } from '../../models/atividade';
import { AtividadeItemProps } from '../../models/atividadesProps';


const AtividadeItem: React.FC<AtividadeItemProps> = ({ativ, pegarAtividade, handleConfirmModal}: AtividadeItemProps) => {

    function prioridadeLabel(param: string) {
        switch (param) {
            case PrioridadeEnum.Baixa:
            case PrioridadeEnum.Normal:
            case PrioridadeEnum.Alta:
                return param;
                break;
            default:
                return 'Não Definido';
                break;
        }
    }

    function prioridadeStyle(param: string, icone: boolean) {
        switch (param) {
            case PrioridadeEnum.Baixa:
                return icone ? 'smile' : 'success';
                break;
            case PrioridadeEnum.Normal:
                return icone ? 'meh' : 'dark';
                break;
            case PrioridadeEnum.Alta:
                return icone ? 'frown' : 'warning';
                break;
            default:
                return 'Não definido'
                break;
        }
    }

    return (
        <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade, false)}>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        {/* <span className="badge text-bg-secondary me-1">{props.ativ.id}</span> */}
                        <span className='text-bg-secondary  me-1'><Badge bg="secondary">{ativ.id}</Badge></span>
                        - {ativ.titulo}
                    </h5>
                    <h6>
                        Prioridade:
                        <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade, false)}>
                            <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade, true)}></i>
                            {prioridadeLabel(ativ.prioridade)}
                        </span>
                    </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2' title='Editar o Card'
                        onClick={() => pegarAtividade(ativ.id)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Editar
                    </button>
                    <button className='btn btn-sm btn-outline-danger' title='Deletar o Card'
                        onClick={() => handleConfirmModal(ativ.id)}>
                        <i className='fas fa-trash me-2'></i>
                        Deletar
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AtividadeItem;