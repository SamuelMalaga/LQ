import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MateriasComponent } from './materias/materias.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './guard/auth.guard'
import { MateriasFormComponent } from './materia/materias-form/materias-form.component';
import { MateriasCadastroComponent } from './materias-cadastro/materias-cadastro.component';
import { MateriaResolverGuard } from './materia/guards/materia-resolver.guard';
import { UploadFileComponent } from './upload-file/upload-file/upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'materias',
    component: MateriasComponent
    ,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
    ,
    canActivate: [AuthGuard],
  },
  {
    path: 'uploadMaterial',
    component: UploadFileComponent
    ,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastroMateria',
    component: MateriasCadastroComponent,
    resolve: {
      materia: MateriaResolverGuard
    },canActivate: [AuthGuard],
  },
  {
    path: 'materias/editar/:id',
    component: MateriasFormComponent,
    resolve: {
      materia: MateriaResolverGuard
    },canActivate: [AuthGuard],
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
