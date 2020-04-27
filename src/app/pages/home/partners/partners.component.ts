import { Component, OnInit } from '@angular/core';
import {StartupService} from '../../../core/services/startup.service';
import {Sponsor} from '../../../core/models/sponsor.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  environment = environment.api.backendURL;

  partners: Sponsor[] = [];

  constructor(private api: StartupService) { }

  ngOnInit() {
    this.api.getSponsors().then(({data}) => {
      this.partners = data;
    }).catch(() => {
      console.log('Error');
    });
  }

}
