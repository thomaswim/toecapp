import { Component, OnInit, AfterViewInit  ,AfterContentInit} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { MembrePage } from '../membre/membre.page';
var ladate=new Date()

function getAge(date) { 
  var diff = Date.now() - date.getTime();
  var age = new Date(diff); 
  return Math.abs(age.getUTCFullYear() - 1970);
}
function compareFirstNames( a, b ) {
  console.log(a)
  if ( a.lastName < b.lastName ){
    return -1;
  }
  if ( a.lastName > b.lastName){
    return 1;
  }
  return 0;
}
 
var tableau = [{lastName:"Franck"},{lastName:"Louis"},{lastName:"Alfred"},{lastName:"Franck"},{lastName:"Louis"},{lastName:"Alfred"}];



 




@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements AfterViewInit {
  membre = [];
  constructor(private routerOutlet: IonRouterOutlet, private routeur : Router, public afDB: AngularFireDatabase, private navCtrl : NavController, public modalController: ModalController) { }
  
goMembre(id){
  //this.navCtrl.navigateRoot("/membre");
  console.log(id);
  this.navCtrl.navigateRoot('/membre',{state: id});
}  
async presentModal(membre) {
  const modal = await this.modalController.create({
    component: MembrePage,
    cssClass: 'my-custom-class',
    swipeToClose: true,
    presentingElement: this.routerOutlet.nativeEl,
    componentProps:{
      membre
    }
  });
  return await modal.present();
}

  getRosterDatabase(){
    this.afDB.list('roster/').snapshotChanges(['child_added']).subscribe(alertes =>{
      alertes.forEach(alerte =>{
          var lastName = alerte.payload.exportVal().lastName;
          var firstName = alerte.payload.exportVal().firstName;
          var spe = alerte.payload.exportVal().spe;
          var comment = alerte.payload.exportVal().comment;
          var birthday = alerte.payload.exportVal().birthday;
          var splittedDate = birthday.split('/'); // On coupe à chaque fois qu'une virgule est rencontrée
          var age = getAge(new Date(splittedDate[2],splittedDate[1],splittedDate[0])) //recuperation de l'age a partir de la date de naissance
          let object = {lastName : lastName, firstName : firstName, comment :comment, spe:spe,birthday:birthday,splittedDate:splittedDate,age:age};
          this.membre.push(object)

          //tri du tableau
          this.membre.sort(compareFirstNames)
         // this.alertes.push(alerte.payload.exportVal().nom);
      })
    })
 
  }


  
  
  ngAfterViewInit() {
    
    console.log(tableau)
    this.getRosterDatabase();
    
    console.log(this.membre);
    //tableau.sort(compareFirstNames)
    console.log(tableau)

    console.log(this.membre);
 
    console.log(getAge(new Date(1995, 12, 6)));
    


  }

}
