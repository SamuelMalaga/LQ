import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { MateriasService } from '../materias.service';
import { Materia } from '../materia';



@Component({
  selector: 'app-materias-lista',
  templateUrl: './materias-lista.component.html',
  styleUrls: ['./materias-lista.component.css'],
  preserveWhitespaces: true,
})
export class MateriasListaComponent implements OnInit {

  //materias: Materia[] = [];

  materias$!: Observable<Materia[]>;
  error$ = new Subject <boolean>();


  constructor(
    private http: HttpClient,
    private service: MateriasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.materias = dados);
    this.onRefresh();

  }
  onRefresh() {
    this.materias$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return empty();
        })
      );

  }
  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
