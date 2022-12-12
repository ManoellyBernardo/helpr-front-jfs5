import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { Toastr } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = [];

  spinner: boolean = true

  constructor(
    private cargoService: CargoService,
    private toast: Toastr
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.uploadTable();
    this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = cargos;
    });
  }

  public delete(idCargo: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.cargoService.delete(idCargo).subscribe(() => {
        this.toast.showSuccess("Cargo excluido.");
        this.initializeTable();
      });
    }
  }

  private uploadTable(): void {
    setTimeout(()=> this.cargoService.findAll().subscribe(cargo => {
      this.dataSource = cargo;
      this.spinner = false; 
  }), 500)
}
}
