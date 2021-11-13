import { Component, OnInit } from '@angular/core';


import { LQbannerComponent } from '../lqbanner/lqbanner.component';
import { FeedComponent } from '../feed/feed.component';
import { RankfeedComponent } from '../rankfeed/rankfeed.component';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
