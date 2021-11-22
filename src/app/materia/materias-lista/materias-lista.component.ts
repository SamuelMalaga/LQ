import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { empty, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';

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
    private modalservice: BsModalService,
    private http: HttpClient,
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
          return empty();
        })
      );

  }
  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }
  onDelete(materia: any) {
    this.materiaSelecionada = materia;
    this.deleteModalRef = this.modalservice.show(this.deleteModal, { class: 'modal-sm' });
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
}
