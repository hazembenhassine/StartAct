import { Component, OnInit } from '@angular/core';
import { StartupService } from '../../../core/services/startup.service';
import { environment } from '../../../../environments/environment';
import { KPI } from '../../../core/models/kpi.model';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {

  environment = environment.api.backendURL;

  pageIndex: number;
  pageSize: number;
  size: number;

  kpis: KPI[];

  constructor(private api: StartupService) { }

  ngOnInit() {
    this.pageSize = 3;
    this.pageIndex = 0;
    this.size = 0;
    this.getKPIs();
  }

  getKPIs(event?: PageEvent) {
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    this.api.getKPIs(this.pageIndex * this.pageSize, this.pageSize).then(({data, total}) => {
      this.kpis = data;
      this.size = total;
    }).catch(() => {
      console.error('Error');
    });
  }

}
