import {ArticlesService} from './articles.service';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  constructor(private articles: ArticlesService) {
  }

  ngOnInit() {
  }
}
