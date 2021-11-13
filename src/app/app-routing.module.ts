import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
