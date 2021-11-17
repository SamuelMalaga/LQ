import { Component, NgModule, OnInit } from '@angular/core';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-lqbanner',
  templateUrl: './lqbanner.component.html',
  styleUrls: ['./lqbanner.component.css']
})
export class LQbannerComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.mostrarMenuEmitter.subscribe(
        (mostrar: any) => this.mostrarMenu = mostrar

    );

  }
}
