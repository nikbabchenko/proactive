import {ModalService} from './../../shared/modal.service';
import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'pr-resistance',
    templateUrl: './resistance.component.html',
    styleUrls: ['./resistance.component.scss']
})
export class ResistanceComponent implements OnInit, AfterViewInit, OnDestroy {
    popupImagesArr: any;
    constructor(private modalService: ModalService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const popupImages = document.getElementsByClassName('popup');
        this.popupImagesArr = Array.from(popupImages);
        this.popupImagesArr.forEach(e => {
            e.addEventListener('click', this.openModal.bind(this));
        });
    }

    openModal(event) {
        this.modalService.open(event);
    }

    ngOnDestroy() {
        this.popupImagesArr.forEach(e => {
            e.removeEventListener('click', this.openModal.bind(this));
        });
    }
}
