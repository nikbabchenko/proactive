import {CharityComponent, ContactsComponent, DocumentsComponent, HomeComponent, ReportComponent} from './pages';
import {ResistanceComponent} from './pages/resistance/resistance.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
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
        loadChildren: 'app/pages/partners/partners.module#PartnersModule'
    }, {
        path: 'report',
        component: ReportComponent
    }, {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'resistance',
        component: ResistanceComponent
    },
    {
        path: 'articles',
        loadChildren: 'app/pages/articles/articles/articles.module#ArticlesModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
