import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pr-accent-block',
  templateUrl: './accent-block.component.html',
  styleUrls: ['./accent-block.component.scss']
})
export class AccentBlockComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;

  constructor() { }

  ngOnInit() {
  }

}
