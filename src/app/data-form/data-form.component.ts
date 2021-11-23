import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { ConfirmedValidator } from './ConfirmedValidator';
import { AlunoCadastroService } from './aluno-cadastro.service'
import { AlertModalService } from '../shared/alert-modal.service';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: AlunoCadastroService,
    private router: Router,
    private alertService: AlertModalService
    
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

  onSubmit() {
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      console.log('submit');
      this.service.create(this.formulario.value).subscribe(
        sucess => { this.alertService.showAlertSucess('Cadastro realizado com sucesso!!'); }
        , error => { this.alertService.showAlertDanger('Erro ao realizar cadastro!'); }
      );
      this.formulario.reset();
      this.router.navigate(['']);
    }
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

