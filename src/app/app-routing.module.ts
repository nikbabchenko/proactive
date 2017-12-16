import {ArticleContentComponent} from './pages/articles/article-content/article-content.component';
import {LoginComponent} from './pages/login/login.component';
import {EugeneLambovComponent} from './pages/articles/eugene-lambov/eugene-lambov.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
    HomeComponent,
    CharityComponent,
    ContactsComponent,
    DocumentsComponent,
    ReportComponent
} from './pages/index';

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
