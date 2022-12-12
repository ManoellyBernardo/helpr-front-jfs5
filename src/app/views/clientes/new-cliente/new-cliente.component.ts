import { Router } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  public formCliente: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private toast: Toastr
  ) {
    this.formCliente = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      telefone: ["", [Validators.required]],
      senha: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCliente.valid) {
      const cliente: Cliente = this.formCliente.value;
      this.clienteService.create(cliente).subscribe(response => {
        this.toast.showSuccess("Cliente cadastrado com sucesso!");
        this.router.navigate(["/clientes"]);
      });
    }
    else {
      this.toast.showError("Dados inválidos.");
    }
  }
}
