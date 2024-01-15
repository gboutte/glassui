import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doc';

  menu = [
    {
      label: 'Setup',
      link: '/setup'
    },
    {
      label: 'Theme',
      link: '/theme'
    },
    {
      label: 'Buttons',
      link: '/buttons'
    },
    {
      label: 'Inputs',
      link: '/inputs',
    },
    {
      label: 'Navigation',
      link: '/navigation',
    },
    {
      label: 'Content',
      link: '/content',
    }
  ]
}
