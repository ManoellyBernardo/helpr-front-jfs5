import { Component, OnInit } from '@angular/core';
import { FuturoCandidato } from 'src/app/models/futuroCandidato';
import { FuturoCandidatoService } from 'src/app/services/futuroCandidato.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './futuro-candidatos.component.html',
  styleUrls: ['./futuro-candidatos.component.css']
})
export class FuturoCandidatosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'setor', 'descricao', 'excluir'];
  dataSource: FuturoCandidato[] = [];

  constructor(private futuroCandidatoService: FuturoCandidatoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroCandidatoService.findAll().subscribe(futuroCandidatos => {
      this.dataSource = futuroCandidatos;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.futuroCandidatoService.delete(id).subscribe(() => {
        alert("Futuro candidato excluido.");
        this.initializeTable();
      });
    }
  }
}
