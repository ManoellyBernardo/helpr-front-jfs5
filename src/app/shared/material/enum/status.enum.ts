export enum Status {
    RECEBIDO, 
    ATRIBUIDO,
    CONCLUIDO,
    ARQUIVADO,
    DEFAULT
}

export const DescricaoStatus = new Map<string, string>([
    ['RECEBIDO', 'Recebido'],
    ['ATRIBUIDO', 'Atribuido'],
    ['CONCLUIDO', 'Concluído'],
    ['ARQUIVADO', 'Arquivado'],
    ['DEFAULT', '']]);

/**
 * Map<string, string>
 
        Chave        Valor
    { "RECEBIDO": "Recebido" }
*/