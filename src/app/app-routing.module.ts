import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
    HomeComponent,
    CharityComponent,
    ContactsComponent,
    DocumentsComponent,
    PartnersComponent,
    ReportComponent
} from './pages/index';

const routes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'charity',
        component: CharityComponent
    }, {
        path: 'documents',
        component: DocumentsComponent
    }, {
        path: 'partners',
        component: PartnersComponent
    }, {
        path: 'report',
        component: ReportComponent
    }, {
        path: 'contacts',
        component: ContactsComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}