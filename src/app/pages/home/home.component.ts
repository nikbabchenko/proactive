import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<any>;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('ОО "Ассоциация инициативных инвалидов"');

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
}
