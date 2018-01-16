import {charityList} from './charity-list';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../shared/modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pr-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements AfterViewInit, OnDestroy  {
  popupImagesArr;
  routerSubscription;
  charityItems = charityList;
  constructor(private modalService: ModalService,
    private route: ActivatedRoute) { }

  ngAfterViewInit() {
    const popupImages = document.getElementsByClassName('popup');
    this.popupImagesArr = Array.from(popupImages);
    this.popupImagesArr.forEach( e => {
      e.addEventListener('click', this.openModal.bind(this));
    });

    this.routerSubscription = this.route.fragment
      .subscribe(fragment => {
        if (fragment) {
          let hashElement = document.getElementById(fragment);
          if (hashElement) {
            let scrollTop = hashElement.getBoundingClientRect().top;
            setTimeout(() => {
              document.body.scrollTop = scrollTop - document.getElementById('header').offsetHeight - 10;
              document.documentElement.scrollTop = scrollTop - document.getElementById('header').offsetHeight - 10;
            }, 200);
          }
        }
    });
  }

  openModal(event) {
      this.modalService.open(event);
  }

  ngOnDestroy() {
    this.popupImagesArr.forEach( e => {
      e.removeEventListener('click', this.openModal.bind(this));
    });

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
