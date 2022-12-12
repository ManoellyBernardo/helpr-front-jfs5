import { Status } from '../shared/material/enum/status.enum';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
export interface Chamado {
    idChamado?: number;
    titulo: string;
    descricao: string;
    dataAbertura?: string;
    dataFechamento?: string;
    status?: Status;
    funcionario: Funcionario;
    cliente: Cliente;
}
