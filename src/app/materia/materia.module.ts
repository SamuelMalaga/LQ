import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MateriasListaComponent } from './materias-lista/materias-lista.component';
import { MateriasFormComponent } from './materias-form/materias-form.component';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    MateriasListaComponent,
    MateriasFormComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule
  ],
  exports: [MateriasListaComponent, MateriasFormComponent]
})
export class MateriaModule { }
