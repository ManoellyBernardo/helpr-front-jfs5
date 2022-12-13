import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf' , 'editar', 'excluir'];
  dataSource: Funcionario [] = [];

  spinner: boolean = true

  constructor(
    private funcionarioService: FuncionarioService,
    private toast: Toastr
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.uploadTable();
    this.funcionarioService.findAll().subscribe(funcionario => {
      this.dataSource = funcionario;
    });
  }

  public delete(idFuncionario: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(idFuncionario).subscribe(() => {
        this.toast.showSuccess("Funcionário excluido.");
        this.initializeTable();
      });
    }
  }

  private uploadTable(): void {
    setTimeout(()=> this.funcionarioService.findAll().subscribe(funcionario => {
    this.dataSource = funcionario;
    this.spinner = false; 
  }), 500)
}
}