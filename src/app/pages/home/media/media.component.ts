import { Component, OnInit } from '@angular/core';
import { StartupService } from '../../../core/services/startup.service';
import { Album } from '../../../core/models/album.model';
import { environment } from '../../../../environments/environment';
import {MatDialog} from '@angular/material';
import {ImageGalleryComponent} from '../../../shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  images: Array<any> = [
    {
      thumbImage: 'assets/incubation.png',
      title: 'Incubation',
      images: []
    },
    {
      thumbImage: 'assets/incubation.png',
      title: 'Incubation',
      images: []
    },
    {
      thumbImage: 'assets/incubation.png',
      title: 'Incubation',
      images: []
    },
    {
      thumbImage: 'assets/incubation.png',
      title: 'Incubation',
      images: []
    },
    {
      thumbImage: 'assets/incubation.png',
      title: 'Incubation',
      images: []
    }
  ];

  constructor(private api: StartupService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.api.getAlbums().then(({data}) => {
      if (data && data.length > 0) {
        const tab = data as Album[];
        this.images = tab.map(({cover, title, images}) => {
          return {
            thumbImage: environment.api.backendURL + cover,
            title,
            images
          };
        });
      }
    }).catch(() => {
      console.log('ERROR');
    });
  }

  click(index: number) {
    console.log(index);
    this.dialog.open(ImageGalleryComponent, {
      panelClass: 'custom-mat-dialog',
      disableClose: false,
      data: this.images[index].images
    });
  }

}
