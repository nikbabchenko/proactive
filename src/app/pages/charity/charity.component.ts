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
  charityItems = [
    {
      name: 'Любитов М.',
      goal: 'Послеоперационная реабилитация. Диагноз - стато-лакомоторная и кинестетическая, мозжечковая дизартрия',
      summ: '50 000 грн.',
      add: '<a href="http://grad.ua/lenta-novostey/'
      + '68410-speckurs-dlya-stalkera-maksima-lyubitova-srochno-nuzhna-pomosch.html" class="link" target="_blank">' +
      'http://grad.ua/lenta-novostey/68410-speckurs-dlya-stalkera-maksima-lyubitova-srochno-nuzhna-pomosch.html</a>',
      id: 'operation'
    },
    {
      name: 'Багрин А.',
      goal: 'Покупка инвалидной коляски',
      summ: '4 980 грн.',
      add: '<img src="/assets/images/kolyaska.jpg" alt="Инвалидная коляска для инвалида" class="responsive-image" />',
      id: 'kolyaska'
    },
    {
      name: 'Кирьяк Б.',
      goal: 'Покупка смартфона для инвалидов',
      summ: '5 700 грн.',
      add: '<img src="/assets/images/smartphone.jpg" alt="смартфон" class="responsive-image"/>',
      id: 'smartphone'
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
      add: '<img src="/assets/images/stenka_1.jpg" alt="купленная шведская стенка Персей" class="responsive-image"/>',
      id: 'school'
    },
    {
      name: 'Комунальное учреждение "Одесская специализировання общеобразовательная школа-интернат №97 I-II ступеней"',
      goal: 'Покупка тротуарной плитки',
      summ: '47 799 грн.',
      add: '<img src="/assets/images/plitka-1.jpg" alt="Купленная тротуарная плитка" class="responsive-image popup">'
    },
    {
      name: 'Ламбов Е.В.',
      goal: 'Приобретение лекарственных препаратов',
      summ: '3 410  грн.',
      add: '<img src="/assets/images/lambov1.jpg" alt="Приобретение лекарственных препаратов" class="responsive-image popup">',
      id: 'preparaty'
    },
    {
      name: 'Ламбов Е.В.',
      goal: 'Приобретение медицинского оборудования',
      summ: '6 553 грн.',
      add: '<img src="/assets/images/lambov2.jpg" alt="Приобретение лекарственных препаратов" class="responsive-image popup">'
    },
    {
      name: 'Кукурудзяк В.Г.',
      goal: 'Приобретение медицинского препарата Артрум 75',
      summ: '11 400 грн.',
      add: '<img src="/assets/images/artrum.jpg" alt="Кукурудзяк В.Г. Приобретение медицинского препарата Артрум 75" class="responsive-image popup">'
    },
    {
      name: 'Участник АТО <br /> Шкуренко О.О.',
      goal: 'Приобретение медицинских препаратов',
      summ: '13 576 грн.',
      add: '<img src="/assets/images/12.jpg" alt="Участник АТО Шкуренко О.О. приобретение медицинских препаратов" class="responsive-image">'
    },
    {
      name: 'Участник АТО <br /> Кишка В.В.',
      goal: 'Приобретение комплекса фиксаторов для накостного остеосинтеза голени и надлокотника',
      summ: '11 400 грн.',
      add: '<img src="/assets/images/kishka.jpg" alt="Приобретение комплекса фиксаторов для накостного остеосинтеза голени и надлокотника" class="responsive-image popup">'
    },
    {
      name: 'Учасник АТО <br /> Андросов Р.И.',
      goal: 'Приобретение медицинских препаратов',
      summ: '11 500 грн.',
      add: '<img src="/assets/images/androsov.jpg" alt="Приобретение комплекса фиксаторов для накостного остеосинтеза голени и надлокотника" class="responsive-image popup">'
    },
    {
      name: 'Комунальное учреждение "Одесская специализировання общеобразовательная школа-интернат №97 I-II ступеней"',
      goal: 'Обеспечение кроватями и партами',
      summ: '33 500 грн.',
      add: '<img src="/assets/images/school-1.jpg" alt="Обеспечение кроватями и партами" class="responsive-image popup">'
    },
    {
      name: 'Оберин С.Л.',
      goal: 'Приобретение медицинского препарата для лечения деформирующего артроза',
      summ: '11 400 грн.',
      add: '<img src="/assets/images/overin.jpg" alt="Приобретение медицинского препарата для лечения деформирующего артроза" class="responsive-image popup">'
    },
    {
      name: 'Креч В.М.',
      goal: 'Оплата компьютерной томографии КЛ «Феофания»',
      summ: '11 700 грн.',
      add: '<img src="/assets/images/crech.jpg" alt="Оплата компьютерной томографии КЛ «Феофания»" class="responsive-image popup">'
    }
  ];
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
