import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'News', url: '/news', icon: 'newspaper' },
    { title: 'Calendrier', url: '/calendar', icon: 'calendar' },
    { title: 'Infos', url: '/infos', icon: 'information' },
    { title: 'Live', url: '/live', icon: 'time' },
    { title: 'Roster', url: '/roster', icon: 'accessibility' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
