import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Observable, of } from 'rxjs';


import { Materia } from '../materia';
import { MateriasService } from '../materias.service';

@Injectable({
  providedIn: 'root'
})
export class MateriaResolverGuard implements Resolve<Materia> {

  constructor(private service: MateriasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Materia>{
    if (route.params && route.params['id']) {
      this.service.loadByID(route.params['id']);
    }

    return of({
      id: null as any,
      title: null as any,
      author: null as any,
    })




  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
