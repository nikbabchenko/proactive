import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {
  goals = [
    {
      icon: 'weight-balance',
      text: 'Защита прав и интересов инвалидов'
    },
    {
      icon: 'settings',
      text: 'Обеспечение инвалидам равных с другими гражданами возможностей участия во всех сферах жизни общества'
    },
    {
      icon: 'person',
      text: 'Интеграция инвалидов в общество'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
