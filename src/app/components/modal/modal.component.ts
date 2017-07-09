import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

declare let window: any;

@Component({
  selector: 'pr-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
    isOpenModal = false;

    @ViewChild('modalImg')private modalImg;
    documentBody = document.body;

    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        const modal = this;
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove();
        this.element.remove();
        window.removeEventListener('keyup', this.closeOnEsc);
    }

    open(event) {
        this
            .modalImg
            .nativeElement
            .setAttribute('src', event.target.src);

        this
            .modalImg
            .nativeElement
            .setAttribute('alt', event.target.alt);

        this.isOpenModal = true;
        this.documentBody.style.overflow = 'hidden';
        window.addEventListener('keyup', this.closeOnEsc.bind(this));
    }

    closeOnEsc(e) {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    close() {
        this
            .modalImg
            .nativeElement
            .setAttribute('src', '');

        this
            .modalImg
            .nativeElement
            .setAttribute('alt', '');

        this.isOpenModal = false;
        this.documentBody.style.overflow = '';
    }
}
