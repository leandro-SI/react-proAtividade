import React, { useEffect, useState } from 'react';
import { IAtividade, PrioridadeEnum } from '../../models/atividade';
import { AtividadeFormProps } from '../../models/atividadesProps';

const atividadeInicial: IAtividade = {
    id: 0,
    titulo: '',
    prioridade: PrioridadeEnum.NaoDefinido,
    descricao: ''
}

const AtividadeForm: React.FC<AtividadeFormProps> = ({
    atividadeSelecionada,
    atualizarAtividade,
    addAtividade,
    cancelarAtividade }: AtividadeFormProps) => {

    const [atividade, setAtividade] = useState<IAtividade>(atividadeAtual());

    useEffect(() => {
        if (atividadeSelecionada.id != 0) {
            setAtividade(atividadeSelecionada);
        }
    }, [atividadeSelecionada]);

    const handlerValue = (e: any) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (atividadeSelecionada.id != 0) {
            atualizarAtividade(atividade);
        }
        else {
            addAtividade(atividade);
        }

        setAtividade(atividadeInicial);

    }

    const handlerCancelar = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        cancelarAtividade();

        setAtividade(atividadeInicial);

    }

    function atividadeAtual(): IAtividade {
        if (atividadeSelecionada.id != 0) {
            return atividadeSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    return (
        <>
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* <div className="col-md-6">
                <label className="form-label">Id</label>
                <input 
                    type="text"
                    className="form-control"
                    name='id'
                    id="id"
                    onChange={handlerValue}
                    value={atividade.id} />
            </div> */}
                <div className="col-md-6">
                    <label className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" name='titulo' value={atividade.titulo} onChange={handlerValue} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                    <select id="prioridade" className="form-select" name='prioridade' value={atividade.prioridade} onChange={handlerValue}>
                        <option defaultValue="0">Selecionar...</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao" name='descricao' value={atividade.descricao} onChange={handlerValue} />
                    <hr />
                </div>

                <div className='col-12 mt-0'>
                    {

                        atividade.id == 0
                            ?
                            <button
                                className="btn btn-outline-success"
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i> Salvar</button>
                            :
                            <>
                                <button className="btn btn-outline-success me-2"
                                    type='submit'> <i className='fas fa-plus me-2'></i> Salvar</button>
                                <button className="btn btn-outline-warning"
                                    onClick={handlerCancelar} > <i className='fas fa-plus me-2'></i>Cancelar</button>
                            </>
                    }
                </div>
            </form>
        </>
    )
}

export default AtividadeForm;