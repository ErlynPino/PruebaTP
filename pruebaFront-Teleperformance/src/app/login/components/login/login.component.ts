import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.loginService.login(user)
        .subscribe(response => {
          if (response) {
            this.loginService.setRole(response.role);
            if (response.role == "user") {
              this.router.navigate(['/home/users']);
            }
            else {
              this.router.navigate(['/home/admin']);
            }
            this.toastrService.success(`Bienvenido ${response.role}`, 'Welcome', {
              timeOut: 3000,
            });
          }
        }
          ,
          (err: HttpErrorResponse) => {
            this.toastrService.error(`${err.error}`, 'Major Error', {
              timeOut: 3000,
            });
          }
        );
    }
  }
}
