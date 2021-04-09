import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(
    public afDB: AngularFireDatabase
  ) { }


 
  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }
  ngOnInit() {
    
  }

}
