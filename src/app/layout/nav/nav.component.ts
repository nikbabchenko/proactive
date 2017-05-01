import { Component, OnInit, Input } from '@angular/core';
import { LinkItem } from './nav-items.model';

@Component({
    selector : 'pr-nav',
    templateUrl : './nav.component.html',
    styleUrls : ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    isOpenNav: boolean;
    differ: any;
    @Input()
    items: Array<LinkItem>;

    constructor() {}
    ngOnInit() {
    }
}
