import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        image: '/assets/images/1.jpg',
        text: 'Післяопераційна реабілітація. Діагноз - стато-локомоторна та кінестетична, мозжечкова дизартрія',
        link: [],
      },
      {
        image: '/assets/images/2.jpg',
        text: 'Придбання інвалідної коляски',
        link: [],
      },
      {
        image: '/assets/images/3.jpg',
        text: 'Придбання мобільного смартфону для інвалідів',
        link: [],
      },
      {
        image: '/assets/images/4.jpg',
        text: 'Придбання будівельних матеріалів для поточного ремонту приміщення',
        link: [],
      },
      {
        image: '/assets/images/5.jpg',
        text: 'Придбання будівельних матеріалів для поточного ремонту приміщення',
        link: [],
      }
    ];
  }

}
