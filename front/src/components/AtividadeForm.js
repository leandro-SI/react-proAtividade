import React, { useEffect, useState } from 'react';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {

    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (props.atividadeSelecionada.id != 0) {
            setAtividade(props.atividadeSelecionada);
        }
    }, [props.atividadeSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value })
    }

    function atividadeAtual() {
        if (props.atividadeSelecionada.id != 0) {
            return props.atividadeSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.atividadeSelecionada.id != 0) {
            props.atualizarAtividade(atividade);
        }
        else {
            props.addAtividade(atividade);
        }

        setAtividade(atividadeInicial);

    }

    const handlerCancelar = (e) => {
        e.preventDefault();

        props.cancelarAtividade();

        setAtividade(atividadeInicial);

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
                    onChange={inputTextHandler}
                    value={atividade.id} />
            </div> */}
                <div className="col-md-6">
                    <label className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" name='titulo' value={atividade.titulo} onChange={inputTextHandler} />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                    <select id="prioridade" className="form-select" name='prioridade' value={atividade.prioridade} onChange={inputTextHandler}>
                        <option defaultValue="0">Selecionar...</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                    </select>
                </div>

                <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea type="text" className="form-control" id="descricao" name='descricao' value={atividade.descricao} onChange={inputTextHandler} />
                    <hr />
                </div>

                <div className='col-12 mt-0'>
                    {console.log('Atividade', atividade.id)}
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
