import {ArticlesService} from './pages/articles/articles.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from 'ngx-sharebuttons';

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

import { MobileNavService } from './shared/mobile-nav.service';
import { SharedModule } from './shared/shared.module';
import { ResistanceComponent } from './pages/resistance/resistance.component';

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
        DocumentsComponent,
        CharityComponent,
        ReportComponent,
        ContactsComponent,
        ResistanceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        MobileNavService,
        Title,
        ArticlesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
