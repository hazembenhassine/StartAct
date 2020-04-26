import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(selector: string, event: Event) {
    if (selector === '#process' || selector === '#media' || selector === '#contact') {
      event.preventDefault();
      if (!this.router.url.startsWith('/home')) {
        this.router.navigateByUrl('/home')
          .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
          .then(() => {
            const element = document.querySelector(selector);
            if (element) {
              element.scrollIntoView({behavior: 'smooth'});
            }
          });
      } else {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    }
  }

}
