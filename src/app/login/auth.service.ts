import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;


      this.router.navigate(['/home'])


    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  }

