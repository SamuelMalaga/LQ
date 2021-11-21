import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { delay, tap, take } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { Materia } from './materia';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private readonly API = `${environment.API}materias` ;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Materia[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log));
  }

  loadByID(id: any) {
    return this.httpClient.get<Materia>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(materia: any) {
    return this.httpClient.post(`${this.API}`, materia).pipe(take(1));
  }
  private update(materia: any) {
    return this.httpClient.put(`${this.API}/${materia.id}`, materia).pipe(take(1));
  }
  save(materia: any) {
    if (materia.id) {
      return this.update(materia);
    }
    return this.create(materia);
  }
  
}
