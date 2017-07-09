import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'pr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private render: Renderer2) {}

    onDeactivate() {
        // to start next page from the top
        this.render.setProperty(document.body, 'scrollTop', 0);
    }
}
