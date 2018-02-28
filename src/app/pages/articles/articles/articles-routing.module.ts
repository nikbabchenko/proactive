import {ArticleContentComponent} from './../article-content/article-content.component';
import {ObrashenieComponent} from './obrashenie/obrashenie.component';
import {EugeneLambovComponent} from './eugene-lambov/eugene-lambov.component';
import {ZvernennjaDoOrganivComponent} from './zvernennja-do-organiv/zvernennja-do-organiv.component';
import {ArticlesComponent} from './../articles.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { component: ArticlesComponent,
    path: '',
    children: [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        {
            path: 'zvernennja-do-pravoohoronnih-organiv',
            component: ZvernennjaDoOrganivComponent,
            pathMatch: 'full'
        },
        {
            path: 'eugene-lambov',
            component: EugeneLambovComponent,
            pathMatch: 'full'
        },
        {
            path: 'obrashenie-o-sotrudnichestve',
            component: ObrashenieComponent,
            pathMatch: 'full'
        },
        {
            path: ':id',
            component: ArticleContentComponent
        }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
