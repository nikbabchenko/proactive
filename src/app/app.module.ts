import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MobileNavService } from './shared/mobile-nav.service';
import { SharedModule } from './shared/shared.module';
import { ResistanceComponent } from './pages/resistance/resistance.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ZvernennjaDoOrganivComponent } from './pages/articles/zvernennja-do-organiv/zvernennja-do-organiv.component';
import { EugeneLambovComponent } from './pages/articles/eugene-lambov/eugene-lambov.component';

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
        ResistanceComponent,
        ArticlesComponent,
        ZvernennjaDoOrganivComponent,
        EugeneLambovComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule.forRoot(),
        HttpClientModule,
        ShareButtonsModule.forRoot()
    ],
    providers: [
        MobileNavService,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
