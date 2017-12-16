import {SafeHtmlPipe} from './../pipes/safe-html.pipe';
import {LoaderComponent} from './../components/loader/loader.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageHeaderComponent, ModalComponent } from '../components/index';
import { ModalService } from '../shared/modal.service';

@NgModule({
  imports: [
        CommonModule
  ],
  declarations: [
    ImageHeaderComponent,
    ModalComponent,
    LoaderComponent,
    SafeHtmlPipe

  ],
  exports: [
    ImageHeaderComponent,
    ModalComponent,
    LoaderComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ModalService
      ]
    };
  }

 }
