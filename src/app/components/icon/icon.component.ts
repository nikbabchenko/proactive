import { Component, ChangeDetectionStrategy, ElementRef, OnInit, Input} from '@angular/core';
declare var require: any;

@Component({
    selector: 'pr-icon',
    template: './icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
    @Input() class: string;
    svgs: any = require('assets/icons/svg.json');

    constructor(
                private elementRef: ElementRef) {}

    loadSvgFromFile(name: string) {
        const element = this.elementRef.nativeElement;
        const svg = this.svgs[name + '.svg'];

        if (svg) {
            element.innerHTML = svg;
        } else {
            element.innerHTML = name;
            element.style.color = '#fff';
        }
    }

    ngOnInit() {
        this.loadSvgFromFile(this.class.replace(/-icon$/, ''));
    }
}
