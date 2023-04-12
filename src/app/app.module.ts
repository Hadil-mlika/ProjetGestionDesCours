import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourComponent } from './cour/cour.component';
import { CssComponent } from './css/css.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JsComponent } from './js/js.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';

import { UsersComponent } from './admin/users/users.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';

import { ColorPickerModule } from 'primeng/colorpicker';

import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminfooterComponent } from './admin/adminfooter/adminfooter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CourComponent,
    CssComponent,
    FooterComponent,
    HomeComponent,
    HtmlComponent,
    JsComponent,
    NavbarComponent,
    AdminComponent,

    UsersComponent,
    LoginAdminComponent,
    AdminnavbarComponent,
    AdminfooterComponent,
    LoginComponent,
    RegisterComponent,
    AddUserComponent,
    UpdateUserComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

FormsModule,
ReactiveFormsModule,
    ConfirmDialogModule,

    CardModule,
    ToastModule,
    InputTextModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    ConfirmDialogModule,
    ColorPickerModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    InputSwitchModule,
    EditorModule,
    TagModule,
    InputMaskModule,
    FieldsetModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
