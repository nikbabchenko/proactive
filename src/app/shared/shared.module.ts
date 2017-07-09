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
    ModalComponent
  ],
  exports: [
    ImageHeaderComponent,
    ModalComponent
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
