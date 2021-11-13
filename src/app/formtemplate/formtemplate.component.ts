import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: '',
    idade: '',
    senha: '',

  }

  onSubmit(form: any) {
    console.log(form);

    console.log(this.usuario)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
