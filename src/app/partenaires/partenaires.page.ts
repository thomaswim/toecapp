import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.page.html',
  styleUrls: ['./partenaires.page.scss'],
})
export class PartenairesPage implements OnInit {

  public partenaires = [
    {
      titre: 'Speedo',
      sousTitre: 'Equipementier',
      img:'',
      description: 'Speedo est bla bla bka kla nannzd dbnd dnd cnd snfd dsnbfdsns'
    },
    {
      titre: 'Air France',
      sousTitre: 'Compagnie aerienne',
      img:'',
      description: 'Air Franceest bla bla bka kla nannzd dbnd dnd cnd snfd dsnbfdsns'
    },
    {
      titre: 'Punch Power',
      sousTitre: 'Nutrition',
      img:'',
      description: 'Punchpowdr est bla bla bka kla nannzd dbnd dnd cnd snfd dsnbfdsns'
    },
  ];

  constructor(
    public afDB: AngularFireDatabase
  ) { }

getAlerteDatabase(){
  this.afDB.list('Alertes/').snapshotChanges(['child_added']).subscribe(alertes =>{
    alertes.forEach(alerte =>{
        var titre = alerte.payload.exportVal().titre;
        var sousTitre = alerte.payload.exportVal().sousTitre;
        var img = alerte.payload.exportVal().img;
        var description = alerte.payload.exportVal().description;
        let object = {titre : titre, sousTitre: sousTitre, description: description,img: img};
        
        this.partenaires.push(object)
       // this.alertes.push(alerte.payload.exportVal().nom);
    })
  })
  console.log("ok");
}
  ngOnInit() {
    //this.getAlerteDatabase();
    console.log(this.partenaires);
  }
}
