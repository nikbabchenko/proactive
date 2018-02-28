import {ArticlesService} from './../articles/articles.service';
import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ModalService} from '../../shared/modal.service';

@Component({
  selector: 'pr-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit, AfterViewInit {
  popupImagesArr;
  memorandums = [];
  isPending: boolean;
  constructor(private modalService: ModalService, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getMemorandums();
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

  getMemorandums() {
    this.isPending = true;

    this.articlesService.getMemorandums()
      .subscribe((memorandumsArr: any[]) => {
        this.isPending = false;
        this.memorandums = memorandumsArr;
      }, err => {
          console.log(err);
          this.isPending = false;
      });
  }
}
