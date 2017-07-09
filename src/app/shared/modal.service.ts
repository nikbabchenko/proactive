import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    private modal: any;

    add(modal: any) {
        this.modal = modal;
    }

    remove() {
        this.modal = null;
    }

    open(event) {
        this.modal.open(event);
    }

    close() {
        this.modal.close();
    }
}
