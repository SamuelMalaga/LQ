import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { ConfirmedValidator } from './confirmed.validator'



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
    senhaRepeat: ''

  }

  onSubmit(form: any) {
    console.log(form);

    console.log(this.usuario)

    this.http.post('http://localhost:3000/profile', JSON.stringify(form.value))
      .pipe(map(res => res))
      .subscribe((dados: any) => console.log(dados));
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo:any) {
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
