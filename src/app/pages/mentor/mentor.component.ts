import { Component, OnInit } from '@angular/core';
import { Mentor } from '../../core/models/mentor.model';
import { StartupService } from '../../core/services/startup.service';
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  environment = environment.api.backendURL;

  isLoading: boolean;
  mentors: Mentor[];

  constructor(private api: StartupService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Mentors et experts - Start\'Act');
    this.isLoading = true;
    this.api.getMentors().then(({data}) => {
      this.mentors = data;
    }).catch(() => {
      console.error('Error');
    }).finally(() => {
      this.isLoading = false;
    });
  }

}
