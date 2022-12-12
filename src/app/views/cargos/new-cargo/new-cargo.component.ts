import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

  public formCargo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cargoService: CargoService,
    private router: Router,
    private toast: Toastr
  ) {
    this.formCargo = formBuilder.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      salario: [0 , [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if (this.formCargo.valid) {
      const cargo: Cargo = this.formCargo.value;
      this.cargoService.create(cargo).subscribe(() => {
        this.toast.showSuccess("Cargo cadastrado.");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      this.toast.showError("Dados inválidos.");
    }
  }

}
