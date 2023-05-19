import React from 'react'

export default function AtividadeForm(props) {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Id</label>
                <input type="text" className="form-control" id="id"
                    value={Math.max.apply(Math, props.atividades.map(item => item.id)) + 1} disabled placeholder="id" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Prioridade</label>
                <select id="prioridade" className="form-select">
                    <option defaultValue="0">Selecionar...</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>

            <div className="col-md-6">
                <label className="form-label">Título</label>
                <input type="text" className="form-control" id="titulo" placeholder="titulo" />
            </div>

            <div className="col-md-6">
                <label className="form-label">Descrição</label>
                <input type="text" className="form-control" id="descricao" placeholder="descricao" />
            </div>

            <hr />

            <div className='col-12'>
                <button className="btn btn-outline-secondary" onClick={props.addAtividade} >+ Atividade</button>
            </div>
        </form>

    )
}
