import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient, private router: Router
  ) { }


  setRole(rol: string) {
    localStorage.setItem('role', rol);
  }

  getRole(): string {
    return localStorage.getItem('role');
  }

  valideRol(): boolean {
    let data = localStorage.getItem('role');
    if (data) {
      return true;
    }
    else {
      return false;
    }
  }

  login(user: User) {
    const response = this.httpClient.post<User>(`${environment.url}/login`, user
    )
      .pipe(
        catchError(this.handleError)
      );

    return response;
  }


  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login]']);
  }
}
