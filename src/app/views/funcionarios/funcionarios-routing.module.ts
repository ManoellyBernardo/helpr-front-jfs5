import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';

const routes: Routes = [
  { 
    path: '',
    component: FuncionariosComponent,
    title: "Helper| Funcionarios"
   },
   { 
    path: 'new',
    component: NewFuncionarioComponent,
    title: "Helper| novo Funcionario"
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
