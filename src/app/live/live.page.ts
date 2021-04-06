import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';



const { Browser } = Plugins;
@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})




export class LivePage implements OnInit {

  constructor() {
    Browser.addListener('browserPageLoaded', ()=>{
      console.log("livePageLoad event called");
    })
    Browser.addListener('browserFinished', ()=>{
      console.log(" FIni event called");
    })
    Browser.prefetch({
      urls: ['https://google.com']
    })
  }
 

  ngOnInit() {
   
  }

async openPage(){
  await Browser.open({toolbarColor:"#f4dc41",url:"https://google.com"});
}

}
