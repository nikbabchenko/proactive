import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pr-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss']
})
export class CharityListComponent implements OnInit {
  @Input()
  items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
