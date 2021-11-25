import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../core/services/login.service';

const rutasRol = {
  admin:['/home/admin'],
  user:['/home/users']
}

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let data = this.loginService.getRole()
      if (data) {
        let ruta = '/home/'+route.routeConfig.path
        return this.validarAcceso(data, ruta);
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    validarAcceso(Rol: string, ruta: string) {
      const rutasArray = rutasRol[Rol];
      if (rutasArray) {
        let valide = rutasArray.includes(ruta);
        if (valide) {
          return true;
        } else {
          this.router.navigate([rutasArray[0]]);
          return false;
        }
      }
    }
}
