import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = [
        {title: 'Документы', link: ['/documents']},
        {title: 'Благотворительность', link: ['/charity']},
        {title: 'Партнеры', link: ['/partners']},
        {title: 'Отчет', link: ['/report']},
        {title: 'Контакты', link: ['/contacts']}
    ];
  }

}
