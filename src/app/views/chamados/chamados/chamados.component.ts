import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';
import { Status, DescricaoStatus } from 'src/app/shared/material/enum/status.enum';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource: Chamado[] = [];
  status = DescricaoStatus;

  spinner: boolean = true

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

   private initializeTable(): void {
   this.uploadTable();
   this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
    });
  }

  private uploadTable(): void {
    setTimeout(()=> this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
      this.spinner = false; 
  }), 500)
}
}