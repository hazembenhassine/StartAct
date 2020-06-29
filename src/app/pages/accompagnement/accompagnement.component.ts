import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accompagnement',
  templateUrl: './accompagnement.component.html',
  styleUrls: ['./accompagnement.component.scss']
})
export class AccompagnementComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Critères d\'éligibilité - Start\'Act');
  }

}
