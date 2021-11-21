import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, take } from 'rxjs/operators';


import { ConfirmedValidator } from './ConfirmedValidator';
import { AlunoCadastroService } from './aluno-cadastro.service'

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  private readonly API = 'http://localhost:3000/alunos'

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: AlunoCadastroService
    ,
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      senhaRepeat: [null, Validators.required]
    }, { validator: ConfirmedValidator('senha', 'senhaRepeat') });

  }
  get f() {
    return this.formulario.controls;
  }

//  onSubmit() {
//    console.log(this.formulario.value)
//    if (this.formulario.valid) {
//      console.log('submit');
//      this.service.create(this.form.value).subscribe();
//    }
//    },
//        (error: any) => alert('erro'));
//}}
  //create(materia: any) {
  //  return this.httpClient.post(`${this.API}`, materia).pipe(take(1));
  //}
  onSubmit() {
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      console.log('submit');
      this.service.create(this.formulario.value).subscribe();
      this.formulario.reset();
    }
  }


  resetar() {
    console.log('resetado');
    this.formulario.reset()
  }
  verificaValidTouched(campo: any) {
    return !this.formulario.get(campo)?.valid && !this.formulario.get(campo)?.touched;
  }
  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
  }

