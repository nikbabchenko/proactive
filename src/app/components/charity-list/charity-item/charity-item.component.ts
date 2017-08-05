import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pr-charity-item',
  templateUrl: './charity-item.component.html',
  styleUrls: ['./charity-item.component.scss']
})
export class CharityItemComponent implements OnInit {
  @Input()
  image: string;
  @Input()
  text: string;
  @Input()
  link: Array<any>;
  @Input()
  additionalClass: string;
  @Input()
  fragment: string;

  constructor() { }

  ngOnInit() {
  }

}
