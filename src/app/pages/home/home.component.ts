import { Component, OnInit } from '@angular/core';
import {StartupService} from '../../core/services/startup.service';
import {Settings} from '../../core/models/settings.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  settings: Settings;

  constructor(private api: StartupService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Accueil - Start\'Act');
    this.api.getSettings().then(({data}) => {
      this.settings = data;
    }).catch(() => {
      console.log('Error');
    });
  }

}
