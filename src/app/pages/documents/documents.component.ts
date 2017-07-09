import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalService } from '../../shared/modal.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pr-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
    constructor(private modalService: ModalService) {}

    ngOnInit() {
    }

    openModal(event) {
        this.modalService.open(event);
    }
}
