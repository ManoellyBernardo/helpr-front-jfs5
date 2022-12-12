import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { TokenAcess } from '../models/token-acess';

@Injectable({
  providedIn: 'root'
})
export class PermissaoAcessoGuard implements CanActivateChild {

  constructor(
    private router: Router
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const jwt = new JwtHelperService();
      const tokenOn:string = localStorage.getItem("token") as string
      const tokenAcess:TokenAcess = jwt.decodeToken(tokenOn)
      if(tokenAcess.perfil == "ROLE_FUNCIONARIO") {
        return true
      }else {
        alert("Acesso não atutorizado para clientes.")
        this.router.navigate(["/home"])
        return false
      }

  }
  
}
