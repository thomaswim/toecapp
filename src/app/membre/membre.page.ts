import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {

  @Input() membre : any;

  constructor(public modalController : ModalController) {
  /*  if (router.getCurrentNavigation().extras.state) {
      const membre = this.router.getCurrentNavigation().extras.state;
console.log(membre) 
    }*/
   }
   dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ngOnInit() {
    console.log(this.membre) 
  }

}
