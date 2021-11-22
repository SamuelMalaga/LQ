import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { LQbannerComponent } from './lqbanner/lqbanner.component'
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AlertModalComponent, LQbannerComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [AlertModalComponent, LQbannerComponent],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
