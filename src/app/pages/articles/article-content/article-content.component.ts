import { Title, Meta } from '@angular/platform-browser';
import { ModalService } from './../../../shared/modal.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../articles.service';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pr-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleContentComponent implements OnInit {
  currentId: number;
  article: any;
  popupImagesArr: any;
  listener: any;
  renderListener: any;
  constructor(private route: ActivatedRoute,
    private articlesService: ArticlesService, private modalService: ModalService,
    private render: Renderer2, private titleService: Title, private metaService: Meta) {
    this.currentId = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this.articlesService.getArticleById(this.currentId)
      .subscribe((data: any) => {
        this.article = data;
        this.articlesService.setLoaded();

        if (data.title && data.title.rendered) {
          this.titleService.setTitle(data.title.rendered);
          this.metaService.updateTag({ name: 'og:title', content: data.title.rendered });
        }

        if (data.excerpt && data.excerpt.rendered) {
          this.metaService.updateTag({ name: 'og:description', content: data.excerpt.rendered });
          this.metaService.updateTag({ name: 'description', content: data.excerpt.rendered });
        }

        if (data.better_featured_image && data.better_featured_image.source_url) {
            this.metaService.updateTag({ name: 'og:image', content: data.better_featured_image.source_url });
        }

        setTimeout(() => {
          this.setModalEvents();
          this.resizeIframe();
        });
      }, err => {
        console.log(err);
      });
  }


  setModalEvents() {
    const popupImages = document.getElementsByClassName('popup');
    this.popupImagesArr = Array.from(popupImages);
    this.listener = this.popupImagesArr.forEach(el => {
      this.render.listen(el, 'click', this.openModal.bind(this));
    });
  }



  resizeIframe() {
    this.renderListener = this.render.listen(window, 'resize', () => {
      const iframe = <any>document.querySelector('.iframe');
      const iframeWidth = iframe.getAttribute('width');
      const iframeHeight = iframe.getAttribute('height');
      const actualWidth = iframe.offsetWidth;
      const proportion = iframe.iframeHeight / iframeWidth;
      if (actualWidth !== iframeWidth) {
        iframe.style.height = Math.round(actualWidth * proportion) + 'px';
      }
    });
  }

  openModal(event) {
    this.modalService.open(event);
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener();
    }

    if (this.renderListener) {
      this.renderListener();
    }

    this.articlesService.destroyLoaded();
  }
}
