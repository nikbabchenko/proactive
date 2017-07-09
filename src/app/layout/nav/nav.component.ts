import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { LinkItem } from './nav-items.model';

@Component({
    selector : 'pr-nav',
    templateUrl : './nav.component.html',
    styleUrls : ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    isOpenNav: boolean;
    @Input()
    items: Array<LinkItem>;

    @ViewChild('navbutton') navButton: ElementRef;

    constructor(private render: Renderer2, private elementRef: ElementRef) {}
    ngOnInit() {
        this.render.listen('body', 'click', (e) => {
            if (!this.navButton.nativeElement.contains(e.target)) {
                this.isOpenNav = false;
            }
        });
    }

    closeMobile() {
        this.isOpenNav = false;
    }
}
