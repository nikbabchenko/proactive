import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './assets/scripts/analytics.js';

declare const ga: any;

if (environment.production) {
  enableProdMode();
  ga('create', 'UA-104135955-1', 'auto');
}

platformBrowserDynamic().bootstrapModule(AppModule);
