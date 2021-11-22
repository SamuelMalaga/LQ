import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { DataFormModule } from './data-form/data-form.module';
import { MateriaModule } from './materia/materia.module';
import { MateriasFormComponent } from './materia/materias-form/materias-form.component';
import { MateriasCadastroComponent } from './materias-cadastro/materias-cadastro.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    HomeComponent,
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
    LoginComponent,
    MateriasComponent,
    PerfilComponent,
    RegistroComponent,
    HomeComponent,
    MateriasFormComponent
  ]
})
export class AppModule { }
