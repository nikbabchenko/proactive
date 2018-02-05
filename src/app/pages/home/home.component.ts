import {ArticlesService} from './../articles/articles.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<any>;
  articles: any[];
  currentPage = 1;
  pages: number;
  pagesCount: number;

  constructor(private titleService: Title,
    private articleService: ArticlesService) { }

  ngOnInit() {
    this.titleService.setTitle('ОО "Ассоциация инициативных инвалидов"');
    this.getArticles();

    this.items = [
      {
        image: '/assets/images/1.jpg',
        text: 'Послеоперационная реабилитация. Диагноз - стато-лакомоторная и кинестетическая, мозжечковая дизартрия',
        link: ['/charity'],
        fragment: 'operation'
      },
      {
        image: '/assets/images/kolyaska_min.jpg',
        text: 'Покупка инвалидной коляски',
        link: ['/charity'],
        fragment: 'kolyaska'
      },
      {
        image: '/assets/images/smartphone.jpg',
        text: 'Покупка смартфона для инвалидов',
        link: ['/charity'],
        fragment: 'smartphone'
      },
      {
        image: '/assets/images/stenka_3.jpg',
        text: 'Покупка Шведской стенки "Персей" и спортивного мата',
        link: ['/charity'],
        fragment: 'school'
      },
      {
        image: '/assets/images/lambov3.jpg',
        text: 'Приобретение лекарственных препаратов',
        link: ['/charity'],
        fragment: 'preparaty'
      }
    ];
  }

  getArticles(page = 1) {
    this.currentPage = page;
    this.articles = undefined;

    this.articleService.getArticles(page ? page : undefined)
      .subscribe((dataWithHeaders: any) => {
        if (!this.pagesCount) {
            this.pagesCount = dataWithHeaders.headers.get('X-WP-TotalPages');
            this.pages = Array.apply(null, {length: this.pagesCount}).map(Number.call, Number);
        }

        this.articles = dataWithHeaders.body;
      }, err => console.log(err));
  }
}
