import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { EMPTY, empty, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, switchMap, take } from 'rxjs/operators';

import { MateriasService } from '../materias.service';
import { Materia } from '../materia';
import { AlertModalService } from '../../shared/alert-modal.service';





@Component({
  selector: 'app-materias-lista',
  templateUrl: './materias-lista.component.html',
  styleUrls: ['./materias-lista.component.css'],
  preserveWhitespaces: true,
})
export class MateriasListaComponent implements OnInit {

  @ViewChild('deleteModal') deleteModal: any;
  deleteModalRef!: BsModalRef;
  materias$!: Observable<Materia[]>;
  error$ = new Subject<boolean>();
  materiaSelecionada!: Materia;


  constructor(
    private service: MateriasService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
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
          this.handleError();
          return EMPTY;
        })
      );

  }
  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }
  onDelete(materia: any) {
    this.materiaSelecionada = materia;
    const result$ = this.alertService.showConfirm('Confrimacao', 'Quer remover esse curso?', 'Quero!', 'Não Quero');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(materia.id) : EMPTY)
    )
      .subscribe(
        sucess => {
          this.onRefresh();
          this.alertService.showAlertSucess('Matéria deletada com sucesso!')
        },
        error => this.alertService.showAlertDanger('Erro ao Deletar a Matéria, tente novamente mais tarde.')
      )

  }
  onConfirmDelete() {
    this.service.remove(this.materiaSelecionada.id)
      .subscribe(
        sucess => {
          this.onRefresh();
          this.deleteModalRef.hide();
          this.alertService.showAlertSucess('Matéria deletada com sucesso!')
        },
        error => this.alertService.showAlertDanger('Erro ao Deletar a Matéria, tente novamente mais tarde.')
      );
  }
  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
  onConstruction() {
    this.alertService.showAlertDanger('Essa funcionalidade ainda está em constução');
  }
}
