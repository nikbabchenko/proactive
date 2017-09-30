import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';

declare const ga: any;

@Component({
    selector: 'pr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private render: Renderer2,
        private router: Router) {
            this.router.events.subscribe(
                event => {
                    if (event instanceof NavigationEnd) {
                        if (environment.production) {
                            ga('send', 'pageview');
                        }
                    }
                }
            )
        }

    onDeactivate() {
        // to start next page from the top
        this.render.setProperty(document.body, 'scrollTop', 0);
        this.render.setProperty(document.documentElement, 'scrollTop', 0);
    }
}
