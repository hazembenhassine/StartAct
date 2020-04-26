import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners = [
    {
      image: 'assets/wiki-copy-2.png'
    },
    {
      image: 'assets/ugfs.jpg'
    },
    {
      image: 'assets/cdc.png'
    },
    {
      image: 'assets/cba-copy-2.png'
    },
    {
      image: 'assets/afd.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
