import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';

const routes: Routes = [
  {
    path: '',
    component: CargosComponent,
    title: "Helper| Cargos"
  },
  {
    path: 'new',
    component: NewCargoComponent,
    title: "Helper|New Cargos"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
