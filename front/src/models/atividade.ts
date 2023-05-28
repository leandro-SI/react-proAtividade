export interface IAtividade {
    id: number,
    prioridade: PrioridadeEnum,
    titulo: string,
    descricao: string
}

export enum PrioridadeEnum {
    NaoDefinido = 'NaoDefinido',
    Baixa = 'Baixa',
    Normal = 'Normal',
    Alta = 'Alta'
}