import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf' , 'editar', 'excluir'];
  dataSource: Funcionario [] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.initializeTable();
  }



  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionario => {
      this.dataSource = funcionario;
    });
  }

  public delete(idFuncionario: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(idFuncionario).subscribe(() => {
        alert("Funcionario excluido.");
        this.initializeTable();
      });
    }
  }

}
