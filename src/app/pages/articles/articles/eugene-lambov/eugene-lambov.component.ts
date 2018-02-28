import {ModalService} from './../../../../shared/modal.service';
import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'pr-eugene-lambov',
  templateUrl: './eugene-lambov.component.html',
  styleUrls: ['./eugene-lambov.component.scss']
})
export class EugeneLambovComponent implements OnInit {
  popupImagesArr: any;
  renderListener;
  @ViewChild('iframe') iframe: ElementRef;
  constructor(private modalService: ModalService,
    private render: Renderer2) { }

  ngOnInit() {
    this.renderListener = this.render.listen(window, 'resize', () => {
      const iframe = this.iframe.nativeElement;
      const iframeWidth = iframe.getAttribute('width');
      const actualWidth = iframe.innerWidth;
      const proportion = iframe.innerHeight / iframeWidth;

      if (actualWidth !== iframeWidth) {
        iframe.style.height =  Math.round( actualWidth * proportion ) + 'px';
      }
    });
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

  ngOnDestroy() {
    if (this.renderListener) {
      this.renderListener();
    };

    this.popupImagesArr.forEach( e => {
      e.removeEventListener('click', this.openModal.bind(this));
    });
  }

}
