import { Component, OnInit } from '@angular/core';
import {KPI} from '../../../core/models/kpi.model';
import {StartupService} from '../../../core/services/startup.service';
import {environment} from '../../../../environments/environment';
import {Startup} from '../../../core/models/startup.model';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.scss']
})
export class StartupsComponent implements OnInit {

  environment = environment.api.backendURL;

  pageIndex: number;
  pageSize: number;
  size: number;

  startup: Startup[];

  constructor(private api: StartupService) { }

  ngOnInit() {
    this.pageSize = 1;
    this.pageIndex = 0;
    this.size = 0;
    this.api.getStartups().then(({data, total}) => {
      this.startup = data;
      this.size = total;
    }).catch(() => {
      console.error('Error');
    });
  }

  setIndex(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

}
