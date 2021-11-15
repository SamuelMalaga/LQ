import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormtemplateComponent } from '../formtemplate/formtemplate.component'
import { DataFormModule } from '../data-form/data-form.module';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
