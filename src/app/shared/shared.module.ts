import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [
      HeaderComponent,
      PaginatorComponent,
      FooterComponent
    ],
  exports: [
    HeaderComponent,
    PaginatorComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
