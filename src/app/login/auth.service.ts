import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { AlertModalService } from '../shared/alert-modal.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private alertService: AlertModalService  ) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === 'Oitoletr1*') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/home'])


    } else {
      this.usuarioAutenticado = false;

      this.alertService.showAlertDanger('Usuário não autenticado');

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  }

