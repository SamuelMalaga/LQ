import { Component, OnInit } from '@angular/core';

import { LQbannerComponent } from '../lqbanner/lqbanner.component';
import { FeedComponent } from '../feed/feed.component';
import { RankfeedComponent } from '../rankfeed/rankfeed.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
