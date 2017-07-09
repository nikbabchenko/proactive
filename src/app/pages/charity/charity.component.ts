import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'pr-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements AfterViewInit, OnDestroy  {
  popupImagesArr;
  charityItems = [
    {
      name: 'Любитов М.',
      goal: 'Послеоперационная реабилитация. Диагноз - стато-лакомоторная и кинестетическая, мозжечковая дизартрия',
      summ: '50 000 грн.',
      add: '<a href="http://grad.ua/lenta-novostey/'
      + '68410-speckurs-dlya-stalkera-maksima-lyubitova-srochno-nuzhna-pomosch.html" class="link" target="_blank">' +
      'http://grad.ua/lenta-novostey/68410-speckurs-dlya-stalkera-maksima-lyubitova-srochno-nuzhna-pomosch.html</a>'
    },
    {
      name: 'Багрин А.',
      goal: 'Покупка инвалидной коляски',
      summ: '4 980 грн.',
      add: '<img src="/assets/images/kolyaska.jpg" alt="Инвалидная коляска для инвалида" class="responsive-image" />'
    },
    {
      name: 'Кирьяк Б.',
      goal: 'Покупка смартфона для инвалидов',
      summ: '5 700 грн.',
      add: '<img src="/assets/images/smartphone.jpg" alt="смартфон" class="responsive-image"/>'
    },
    {
      name: 'Комунальное учреждение "Одесская специализировання общеобразовательная школа-интернат №97 I-II ступеней"',
      goal: 'Покупка строительных материалов для текушего ремонта помещения',
      summ: '40 000 грн.',
      add: '<img src="/assets/images/schet.jpg" alt="смартфон" class="responsive-image popup"/>'
    },
    {
      name: 'Полюга Б.',
      goal: 'Покупка Шведской стенки "Персей" и спортивного мата',
      summ: '3 780 грн.',
      add: '<img src="/assets/images/stenka_1.jpg" alt="купленная шведская стенка Персей" class="responsive-image"/>'
    },
    {
      name: 'Комунальное учреждение "Одесская специализировання общеобразовательная школа-интернат №97 I-II ступеней"',
      goal: 'Покупка тротуарной плитки',
      summ: '47 799 грн.',
      add: '<img src="/assets/images/plitka-1.jpg" alt="Купленная тротуарная плитка" class="responsive-image popup">'
    }
  ];
  constructor(private modalService: ModalService) { }

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
    this.popupImagesArr.forEach( e => {
      e.removeEventListener('click', this.openModal.bind(this));
    });
  }
}
