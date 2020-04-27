import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PaginatorComponent,
    FooterComponent,
    ImageGalleryComponent
  ],
  exports: [
    HeaderComponent,
    PaginatorComponent,
    FooterComponent,
    ImageGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  entryComponents: [
    ImageGalleryComponent
  ]
})
export class SharedModule { }
