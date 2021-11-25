import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { LayoudComponent } from './layoud/layoud/layoud.component';
import { NebularModule } from './nebular/nebular.module';
import { NbDialogModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoScreenComponent } from './user/components/todo-screen/todo-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './admin/components/user-detail/user-detail.component';
import { UsersComponent } from './admin/components/users/users.component';
import { ToastrModule } from 'ngx-toastr';
import { NamePipePipe } from './utils/name-pipe.pipe';
import { LastNamePipePipe } from './utils/last-name-pipe.pipe';
import { EmailPipe } from './utils/email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    LayoudComponent,
    HeaderComponent,
    TodoScreenComponent,
    LoginComponent,
    UserDetailComponent,
    UsersComponent,
    NamePipePipe,
    LastNamePipePipe,
    EmailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
    ToastrModule.forRoot(),
    NebularModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
