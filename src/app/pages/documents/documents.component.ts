import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'pr-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
    isOpenModal = false;
    @ViewChild('modalImg')private modalImg;
    documentBody = document.getElementsByTagName('body')[0];

    constructor() {}

    ngOnInit() {}

    openModal(src, title) {
        this
            .modalImg
            .nativeElement
            .setAttribute('src', src);
        this
            .modalImg
            .nativeElement
            .setAttribute('alt', title);
        this.isOpenModal = true;
        this.documentBody.style.overflow = 'hidden';
    }

    closeModal() {
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
