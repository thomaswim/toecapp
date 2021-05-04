import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.page.html',
  styleUrls: ['./horaires.page.scss'],
})
export class HorairesPage implements OnInit {

  public horaires = [];

  constructor(
    public afDB: AngularFireDatabase
  ) { }

getHorairesDatabase(){
  this.afDB.list('horaires/').snapshotChanges(['child_added']).subscribe(alertes =>{
    alertes.forEach(alerte =>{
        var titre = alerte.payload.exportVal().title;
        var auteur = alerte.payload.exportVal().auteur;
        var date = alerte.payload.exportVal().date;
        var content = alerte.payload.exportVal().content;
        let object = {title : titre, auteur : auteur,date : date, content : content};
        
        this.horaires.push(object)
       // this.alertes.push(alerte.payload.exportVal().nom);
    })
  })
  console.log("ok");
}
  ngOnInit() {
    this.getHorairesDatabase();
    console.log(this.horaires);
  }



}
