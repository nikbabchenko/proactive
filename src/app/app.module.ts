import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, NavComponent } from './layout/index';
import { IconComponent } from '../app/components/icon/icon.component';
import {
    AccentBlockComponent,
    GoalsListComponent,
    CharityItemComponent,
    CharityListComponent
} from './components/index';
import {
    HomeComponent,
    DocumentsComponent,
    CharityComponent,
    ReportComponent,
    ContactsComponent
} from './pages/index';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MobileNavService } from './shared/mobile-nav.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        IconComponent,
        AccentBlockComponent,
        HomeComponent,
        GoalsListComponent,
        CharityListComponent,
        CharityItemComponent,
        SafeHtmlPipe,
        DocumentsComponent,
        CharityComponent,
        ReportComponent,
        ContactsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule.forRoot()
    ],
    providers: [
        MobileNavService,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
