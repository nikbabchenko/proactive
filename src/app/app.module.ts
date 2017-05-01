import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, NavComponent } from './layout/index';
import { IconComponent } from '../app/components/icon/icon.component';
import {
    ImageHeaderComponent,
    AccentBlockComponent,
    GoalsListComponent,
    CharityItemComponent,
    CharityListComponent
} from './components/index';
import {
    HomeComponent,
    DocumentsComponent,
    CharityComponent,
    PartnersComponent,
    ReportComponent,
    ContactsComponent
} from './pages/index';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        IconComponent,
        ImageHeaderComponent,
        AccentBlockComponent,
        HomeComponent,
        GoalsListComponent,
        CharityListComponent,
        CharityItemComponent,
        SafeHtmlPipe,
        DocumentsComponent,
        CharityComponent,
        PartnersComponent,
        ReportComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
