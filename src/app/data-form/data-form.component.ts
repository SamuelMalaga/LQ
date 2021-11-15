import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

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
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email: [null, [Validators.required, Validators.email]],
      idade: [null, [Validators.required]],
      senha: [null, Validators.required]
    })

  }

  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe((dados: any) => {
        console.log(dados);
        //reset form
        this.resetar();
      },
        (error: any) => alert('erro'));
      
  }
  resetar() {
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

