import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';

const routes: Routes = [
  {
    path: '',
    component: CargosComponent,
    title: "Helper| Cargos"
  },
  {
    path: 'new',
    component: NewCargoComponent
  },
  {
    path: 'edit/:idCargo',
    component: EditCargoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
