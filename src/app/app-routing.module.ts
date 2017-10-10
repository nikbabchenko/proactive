import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HomeComponent,
    CharityComponent,
    ContactsComponent,
    DocumentsComponent,
    ReportComponent
} from './pages/index';

import { ZvernennjaDoOrganivComponent } from './pages/articles/zvernennja-do-organiv/zvernennja-do-organiv.component';
import { ArticlesComponent } from './pages/articles/articles.component';

import {
    ResistanceComponent
} from './pages/resistance/resistance.component';

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
        component: ArticlesComponent,
        children: [
            {
                path: 'zvernennja-do-pravoohoronnih-organiv',
                component: ZvernennjaDoOrganivComponent
            }
        ]
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
