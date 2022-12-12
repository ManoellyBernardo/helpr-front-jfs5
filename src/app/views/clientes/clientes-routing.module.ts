import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FuturoCandidatosComponent } from './futuro-candidatos/futuro-candidatos.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    title: "Helper| Clientes"
  },
  {
    path: 'new',
    component: NewClienteComponent,
    title: "Helper| New Clientes"
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent,
    title: "Helper| Edit Clientes"
  },
  {
    path: 'futurocandidato',
    component: FuturoCandidatosComponent,
    title: "Helper| Futuro Candidato"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
