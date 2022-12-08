import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados/chamados.component';
import { EditChamadoComponent } from 'src/app/views/chamados/edit-chamado/edit-chamado.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadosComponent,
    title: "Helper|Chamados"
  },
  {
    path: 'new',
    component: NewChamadoComponent,
    title: "Helper|New Chamado"
  },
  {
    path: 'edit/:id',
    component: EditChamadoComponent,
    title: "Helper|Edit Chamado"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
