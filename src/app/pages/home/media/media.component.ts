import {Component, OnInit, ViewChild} from '@angular/core';
import {NgImageSliderComponent} from 'ng-image-slider';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  images: Array<any> = [
    {
      image: 'assets/incubation.png',
      thumbImage: 'assets/incubation.png',
      title: 'Incubation'
    },
    {
      image: 'assets/incubation.png',
      thumbImage: 'assets/incubation.png',
      title: 'Incubation'
    },
    {
      image: 'assets/incubation.png',
      thumbImage: 'assets/incubation.png',
      title: 'Incubation'
    },
    {
      image: 'assets/incubation.png',
      thumbImage: 'assets/incubation.png',
      title: 'Incubation'
    },
    {
      image: 'assets/incubation.png',
      thumbImage: 'assets/incubation.png',
      title: 'Incubation'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  click(index: number) {
    console.log(index);
  }

}
