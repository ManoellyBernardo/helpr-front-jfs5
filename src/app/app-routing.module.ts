import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PermissaoAcessoGuard } from './guards/permissao-acesso.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
    
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [PermissaoAcessoGuard],
   
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [PermissaoAcessoGuard]
    
  },
  {
    path: 'cargos',
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule)
  },
  { path: 'funcionarios',
   loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
