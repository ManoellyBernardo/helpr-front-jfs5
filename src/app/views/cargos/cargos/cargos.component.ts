import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir'];
  dataSource: Cargo[] = [];

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = cargos;
    });
  }

  public delete(idCargo: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.cargoService.delete(idCargo).subscribe(() => {
        alert("cargo excluido.");
        this.initializeTable();
      });
    }
  }
}
