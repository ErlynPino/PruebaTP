import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoudComponent } from './layoud/layoud/layoud.component';
import { TodoScreenComponent } from './user/components/todo-screen/todo-screen.component';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { LoginComponent } from './login/components/login/login.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AccessGuard } from './guard/access.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: LayoudComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'users',
        component: TodoScreenComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AccessGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
