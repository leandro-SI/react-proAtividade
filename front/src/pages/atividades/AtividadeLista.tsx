import React from 'react'
import AtividadeItem from './AtividadeItem'
import { IAtividade } from '../../models/atividade';
import { AtividadeListaProps } from '../../models/atividadesProps';


const AtividadeLista: React.FC<AtividadeListaProps> = ({atividades, pegarAtividade, handleConfirmModal}: AtividadeListaProps) => {
    return (
        <div className='mt-3'>
            {atividades.map((ativ) => (
                <AtividadeItem
                    key={ativ.id}
                    ativ={ativ}
                    handleConfirmModal={handleConfirmModal}
                    pegarAtividade={pegarAtividade}
                />
            ))}
        </div>
    );
}

export default AtividadeLista;
