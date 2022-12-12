import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  public cargo: Cargo = {
    nome: '',
    descricao: '',
    salario: 0
  };

  constructor(
    private route: ActivatedRoute,
    private cargoService: CargoService,
    private router: Router,
    private toast: Toastr
    ) { }

  ngOnInit(): void {
    this.initilizeFields ();
  }

  private initilizeFields(): void {
    const idCargo: string | null = this.route.snapshot.paramMap.get('idCargo');
    if(idCargo) {
      this.cargoService.findById(idCargo).subscribe(cargo => {
        this.cargo = cargo;
      })
    }
  }

  public update(formEditCargo: NgForm): void {
    if(formEditCargo.valid) {
      this.cargoService.update(this.cargo).subscribe(() => {
        this.toast.showSuccess("Cargo editado.");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      this.toast.showError("Dados inválidos.");
    }
  }


}
