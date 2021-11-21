import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { empty, Observable, Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';

import { MateriasService } from '../materias.service';
import { Materia } from '../materia';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';





@Component({
  selector: 'app-materias-lista',
  templateUrl: './materias-lista.component.html',
  styleUrls: ['./materias-lista.component.css'],
  preserveWhitespaces: true,
})
export class MateriasListaComponent implements OnInit {

  bsModalRef!: BsModalRef;
  materias$!: Observable<Materia[]>;
  error$ = new Subject <boolean>();


  constructor(
    private http: HttpClient,
    private service: MateriasService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.materias = dados);
    this.onRefresh();

  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar as Matérias, tente novamente mais tarde.');
  }
  onRefresh() {
    this.materias$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          /*          this.error$.next(true);*/
          this.handleError();
          return empty();
        })
      );

  }
  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
