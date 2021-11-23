import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, tap, take } from 'rxjs/operators';


import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoCadastroService {

  private readonly API = `${environment.API}alunos`;

  constructor(private httpClient: HttpClient) { }

  create(alunoCadastro: any) {
    return this.httpClient.post(`${this.API}`, alunoCadastro).pipe(take(1));
  }

}
