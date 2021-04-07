import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

  public logos = [
    { titre :"Alertes", icon: 'home', url : '/alertes' },
    {  titre :"Horaires",  icon: 'newspaper' },
    {  titre :"Adresses",  icon: 'calendar' },
    {  titre :"Partenaires", icon: 'information' },
    {   titre :"Contact", icon: 'time' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
