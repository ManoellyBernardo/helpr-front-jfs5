import { Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Toastr } from 'src/app/services/toastr.service';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {

  public formFuncionario: FormGroup 
  public perfis: string[] = ['ADMIN', 'FUNCIONARIO', 'CLIENTE']
  public cargos: Cargo[] = [];
  perfilController = new FormControl();

  constructor(
    formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private toast: Toastr,
    private cargoService: CargoService,
  ) {
    this.formFuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      perfil: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      idCargo: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.cargos = cargos;
    });
  }

  public create(): void {
    if(this.formFuncionario.valid) {
      var funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response => {
        this.toast.showSuccess("Funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      this.toast.showError("Dados inválidos.");
    }
  }
}

