import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap, take } from 'rxjs/operators';
import { Materia } from './materia';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Materia[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log));
  }

  loadByID(id: any) {
    return this.httpClient.get('${[this.API]}/${[id]}').pipe(take(1))
  }

  create(materia: any) {
    return this.httpClient.post(this.API, materia).pipe(take(1));
  }
}
