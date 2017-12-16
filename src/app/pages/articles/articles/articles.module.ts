import {ShareButtonsModule} from 'ngx-sharebuttons';
import {ArticlesComponent} from './../articles.component';
import {ZvernennjaDoOrganivComponent} from './../zvernennja-do-organiv/zvernennja-do-organiv.component';
import {EugeneLambovComponent} from './../eugene-lambov/eugene-lambov.component';
import {ArticleContentComponent} from './../article-content/article-content.component';
import {SharedModule} from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { ArticlesRoutingModule } from './articles-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    ArticleContentComponent,
    ArticlesComponent,
    ZvernennjaDoOrganivComponent,
    EugeneLambovComponent
  ]
})
export class ArticlesModule { }
