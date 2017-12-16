import {ArticlesService} from './articles.service';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  isLoaded: boolean;
  constructor(private articles: ArticlesService) {
  }

  ngOnInit() {
    this.articles.isLoaded().subscribe(
      (data: boolean) => {
        this.isLoaded = data;
      });
  }
}
