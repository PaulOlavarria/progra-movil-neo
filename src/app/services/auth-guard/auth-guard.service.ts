import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) { }

  //damos un return llamando la función isAuthenticated desde authenticationService
  //esto retorna positivo si el usuario tiene las credenciales y permite acceso
  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}
