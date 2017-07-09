import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'pr-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, AfterViewInit {
  popupImagesArr;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const popupImages = document.getElementsByClassName('popup');
    this.popupImagesArr = Array.from(popupImages);
    this.popupImagesArr.forEach( e => {
      e.addEventListener('click', this.openModal.bind(this));
    });
  }

  openModal(event) {
      this.modalService.open(event);
  }
}
