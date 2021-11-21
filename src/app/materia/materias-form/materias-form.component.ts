import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { switchMap, map } from 'rxjs/operators';



import { MateriasService } from '../materias.service';


@Component({
  selector: 'app-materias-form',
  templateUrl: './materias-form.component.html',
  styleUrls: ['./materias-form.component.css']
})
export class MateriasFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    private service: MateriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //this.route.params.subscribe(
    //  (params: any) => {
    //    const id = params['id'];
    //    console.log(id);
    //    const materia$ = this.service.loadByID(id);
    //    materia$.subscribe(materia => {
    //      this.updateForm(materia);
    //    });
    //  }
    //);


    this.route.params
    .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.loadByID(id)))
    .subscribe(materia => this.updateForm(materia));

    const materia = this.route.snapshot.data['materia'];

    this.form = this.fb.group({
      id: [materia.id],
      title: [materia.title, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      author: [materia.author, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
    });

  }

  updateForm(materia: any) {
    this.form.patchValue({
      id: materia.id,
      title: materia.title,
      author: materia.author
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit');

      this.service.save(this.form.value).subscribe();

    }
  };
  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel')
  }

}
