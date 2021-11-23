import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { LQbannerComponent } from './lqbanner/lqbanner.component'
import { AppRoutingModule } from '../app-routing.module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';



@NgModule({
  declarations: [
    AlertModalComponent, LQbannerComponent, ConfirmModalComponent, UnderConstructionComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [AlertModalComponent, LQbannerComponent, UnderConstructionComponent],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
