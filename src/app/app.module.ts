import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { InitiatorsComponent } from './pages/home/initiators/initiators.component';
import { QuestionComponent } from './pages/home/question/question.component';
import { KpisComponent } from './pages/home/kpis/kpis.component';
import { MediaComponent } from './pages/home/media/media.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PartnersComponent } from './pages/home/partners/partners.component';
import { StartupsComponent } from './pages/home/startups/startups.component';
import { AccompagnementComponent } from './pages/accompagnement/accompagnement.component';
import { MentorComponent } from './pages/mentor/mentor.component';
import {StartupService} from './core/services/startup.service';
import {AgmCoreModule} from '@agm/core';
import { ImageGalleryComponent } from './shared/image-gallery/image-gallery.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitiatorsComponent,
    QuestionComponent,
    KpisComponent,
    MediaComponent,
    PartnersComponent,
    StartupsComponent,
    AccompagnementComponent,
    MentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    NgImageSliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYPNbjx2XPZn3DmYbJnJBvprWddtjS5k8'
    })
  ],
  providers: [
    StartupService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageGalleryComponent
  ]
})
export class AppModule { }
