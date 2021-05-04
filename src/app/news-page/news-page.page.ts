import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})


  


export class NewsPagePage implements OnInit {


  @Input() item: any;

  constructor(public modalController : ModalController, private  Dom : DomSanitizer) {
  /*  if (router.getCurrentNavigation().extras.state) {
      const membre = this.router.getCurrentNavigation().extras.state;
console.log(membre) 
    }*/
   }

  /* safeUrl:  SafeResourceUrl;
   private urlValue = this.Embeded(this.getId(this.getLink()))
   get url(): string {
     return this.urlValue
   };
   set url(value: string) {
     this.urlValue = value;
     this.safeUrl = this.Dom.bypassSecurityTrustResourceUrl(value);
   }*/
   


   dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  isyoutube(item){
    var position = item.content.search("https://youtu.be");
    var res = false;
    if (position!=-1){
      res = true;
    }
    return res;
}

getLink(){
  var str = this.item.content;
  str = str.substring(str.indexOf('https://youtu.be'),str.lastIndexOf('>https')-1);
  console.log(str);
  return str;
}
getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

Embeded(code){
  return ('//www.youtube.com/embed/'+code)
}

lien :any;
  ngOnInit() {
    console.log(this.item) 
    if (this.isyoutube(this.item)){
      var link = this.Embeded(this.getId(this.getLink()))
      var safelink = this.Dom.bypassSecurityTrustResourceUrl(link);
      this.lien = safelink
    }
    console.log(link)
  }

}
