import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pr-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  desc: string;
  @Input()
  image: string;
  @Input()
  small: boolean;

  constructor() { }

  ngOnInit() {
  }

}
