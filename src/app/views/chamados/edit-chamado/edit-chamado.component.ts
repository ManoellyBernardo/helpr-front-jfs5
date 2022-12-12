import { NgForm } from '@angular/forms';
import { ClienteService } from './../../../services/cliente.service';
import { ChamadoService } from './../../../services/chamado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamado } from './../../../models/chamado';
import { Cliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-edit-chamado',
  templateUrl: './edit-chamado.component.html',
  styleUrls: ['./edit-chamado.component.css']
})
export class EditChamadoComponent implements OnInit {

  public clientes: Cliente[] = [];
  public funcionarios: Funcionario[] = [];

  private funcionarioEmpty: any = {
    id: NaN,
    nome: "",
    cpf: "",
    email: "",
    cargo: {
      nome: "",
      descricao: "",
      salario: NaN
    }
  }

  private clienteEmpty: Cliente = {
    nome: "",
    cpf: "",
    email: "",
    telefone: ""
  };

  public chamado: Chamado = {
    titulo: "",
    status: "",
    descricao: "",
    cliente: this.clienteEmpty,
    funcionario: this.funcionarioEmpty
  }

  constructor(
    private route: ActivatedRoute,
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private toast: Toastr
  ) { }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeFuncionarios();
    this.initializeChamado();
  }

  private initializeClientes(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  private initializeFuncionarios(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.funcionarios = funcionarios;
    })
  }

  private initializeChamado(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.chamadoService.findById(id).subscribe(chamado => {
        if (!chamado.funcionario)
          chamado.funcionario = this.funcionarioEmpty;
        if (!chamado.cliente)
          chamado.cliente = this.clienteEmpty;
        this.chamado = chamado;
      });
    }
  }

  public update(form: NgForm): void {
    if (form.valid) {
      this.chamadoService.update(this.chamado).subscribe(chamado => {
        this.toast.showSuccess("Chamado editado.");
        this.router.navigate(["/chamados"]);
      });
    }
    else {
      this.toast.showError("Dados inválidos.");
    }
  }
}
