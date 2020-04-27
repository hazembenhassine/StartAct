import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  images: string[];
  currentImageIndex: number;

  constructor(@Inject(MAT_DIALOG_DATA) public imageRaw: string[],
              public dialogRef: MatDialogRef<ImageGalleryComponent>) { }

  ngOnInit() {
    this.images = this.imageRaw.map((img) => `url("${environment.api.backendURL + img}")`);
    if (Array.isArray(this.images) && this.images.length > 0) {
      this.currentImageIndex = 0;
    }
  }

  selectImage(i: number) {
    this.currentImageIndex = i;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1) % this.images.length;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex += this.images.length;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
