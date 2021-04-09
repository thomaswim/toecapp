import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],
})



export class AlertesPage implements OnInit {



  public alertes = [];

  constructor(
    public afDB: AngularFireDatabase
  ) { }

getAlerteDatabase(){
  this.afDB.list('Alertes/').snapshotChanges(['child_added']).subscribe(alertes =>{
    alertes.forEach(alerte =>{
        var titre = alerte.payload.exportVal().titre;
        var doc = alerte.payload.exportVal().doc;
        var img = alerte.payload.exportVal().img;
        let object = {title : titre, doc : doc, img :img};
        
        this.alertes.push(object)
       // this.alertes.push(alerte.payload.exportVal().nom);
    })
  })
  console.log("ok");
}
  ngOnInit() {
    this.getAlerteDatabase();
    console.log(this.alertes);
  }


}
