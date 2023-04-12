import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddUserComponent } from './admin/add-user/add-user.component';

import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UsersComponent } from './admin/users/users.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JsComponent } from './js/js.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component:RegisterComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path : 'about',
    component:AboutComponent,
  },
  {
    path : 'contact',
    component:ContactComponent,
  },
  {
    path : 'cour',
    component:CourComponent,
  },
  {
    path :'html',
    component:HtmlComponent,
  },
  {
    path:'css',
    component:CssComponent
  },
  {
    path:'js',
    component:JsComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent,
  },
  {

    path :'admin',
    component : AdminComponent,
    children: [

      {
        path : '',
        component : UsersComponent,
      },
      {
        path : 'add-user',
        component : AddUserComponent,
      },

    ]
  },
  {
    path : 'login-admin',
    component : LoginAdminComponent
  },
  {
    path : 'add-user',
    component : AddUserComponent,
  },
  {

    path: 'update-user/:id',
    component: UpdateUserComponent
  },
  {
    path : 'update-user',
    component : UpdateUserComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
