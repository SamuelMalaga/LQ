import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LQbannerComponent } from './lqbanner/lqbanner.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { FormtemplateComponent } from './formtemplate/formtemplate.component';
import { HomeComponent } from './home/home.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DataFormModule } from './data-form/data-form.module';
import { MateriaModule } from './materia/materia.module';
import { MateriasFormComponent } from './materia/materias-form/materias-form.component';
import { MateriasCadastroComponent } from './materias-cadastro/materias-cadastro.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    LQbannerComponent,
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    FormtemplateComponent,
    HomeComponent,
    FormDebugComponent,
    MateriasCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataFormModule,
    MateriaModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    LQbannerComponent,
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    FormtemplateComponent,
    HomeComponent,
    MateriasFormComponent
  ]
})
export class AppModule { }
