import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { NewsPagePage } from '../news-page/news-page.page';

let database :[];

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})


export class NewsPage implements OnInit {

  constructor(
    public afDB: AngularFireDatabase,  public modalController: ModalController, private routerOutlet: IonRouterOutlet, private http: HttpClient
  ) { 

  }

  ApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lesdauphinsdutoec.net%2Fblog-feed.xml&api_key=hbfypiz6zdwjlguwpysrkoazao50snqmf4ekhlqz&count=40';

  Data = []



  readAPI(URL: string) {
    return this.http.get(URL);
  }
 

  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas'
    });
  }
  async presentModal(item) {
    const modal = await this.modalController.create({
      component: NewsPagePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps:{
        item
      }
    });
    return await modal.present();
  }


  /*
  loaditem(){
this.presentModal
    function presentModal(item) {
    }



    var content = document.getElementById('content');

    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var data = JSON.parse(xhr.responseText);
            database = data.items;
            var itemsContainer = document.createElement('DIV');
            console.log(database);
            if(data.status == 'ok'){


                for( var i=0,t = data.items.length ; i < t ; ++i ){
                    var item = data.items[i];
                    console.log(item);
                    var itemContainer = document.createElement('DIV');
                    /*
                    

                    var itemTitleElement = document.createElement('H2');
                    var itemLinkElement = document.createElement('A');
                    var itemDescriptionElement = document.createElement('P');
                    

                    itemLinkElement.setAttribute('href' , item.link);
                    itemLinkElement.innerText = item.title;
                    itemTitleElement.appendChild(itemLinkElement);

                    // note : make sure the content is XSS safe before using innerHTML
                    itemDescriptionElement.innerHTML = item.description;

                    itemContainer.appendChild(itemTitleElement);
                    itemContainer.appendChild(itemDescriptionElement);

                    itemsContainer.appendChild(itemContainer);
                    document.getElementById("ici").insertAdjacentHTML('beforeend',' <ion-card> <img src="./../../assets/img/test.jpg" /><ion-card-header><ion-card-subtitle></ion-card-subtitle><ion-card-title>Madison, WI</ion-card-title> </ion-card-header>                <ion-card-content>                  Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.               </ion-card-content>              </ion-card>')
                  
                  //itemContainer.innerHTML="<ion-card id='a'></ion-card>"
                  var card = document.createElement('ion-card');

                  var header = document.createElement('ion-card-header');
                  var subtitle = document.createElement('ion-card-subtitle');
                  var title = document.createElement('ion-card-title');
                  var contenu = document.createElement('ion-card-content');
                  var img = document.createElement('div')
                  
                 
                  title.innerText=item.title;
                  subtitle.innerText=item.pubDate;
                  contenu.innerHTML=item.description;


                  var position = item.description.search("https://youtu.be");
                  if (position!=-1){
                    var str = item.description;
                    str = str.substring(str.indexOf('.be')+4,str.lastIndexOf('>https')-1);
                    console.log(str);
                    img.innerHTML='<img width="100%" src="https://img.youtube.com/vi/'+str+'/hqdefault.jpg">'
                  }else{
                    img.innerHTML="<img src="+item.thumbnail+">"
                  }
                  
                  card.onclick = function(){
                    console.log(item);
                    presentModal(item);
                  }
                  card.appendChild(img);
                  card.appendChild(header);
                  card.appendChild(contenu);

                  header.appendChild(subtitle);
                  header.appendChild(title);
                  console.log(String(i))
                  
                  itemContainer.appendChild(card);
                  itemsContainer.appendChild(itemContainer)
                  


                }



                //var titleElement = document.createElement('H1');
                //titleElement.innerText = data.feed.title;

                content.appendChild(itemsContainer);
                //content.appendChild(titleElement);
                //content.appendChild(itemsContainer);

               


            }
        }
    };
    xhr.open(
        'GET',
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lesdauphinsdutoec.net%2Fblog-feed.xml&api_key=hbfypiz6zdwjlguwpysrkoazao50snqmf4ekhlqz&count=40',
        true
    );
    xhr.send(); 
  }
*/


    ngOnInit() {
   //   this.loaditem()
      console.log(database)
      this.readAPI(this.ApiUrl).subscribe((datas : any )=> {
        datas.items.forEach(item =>{
           console.log(item);

          var title = item['title'];
          var description = item['description'];
          var thumbnail = item['thumbnail'];
          var content = item['content'];
          var pubDate = item['pubDate'];
          var position = item.description.search("https://youtu.be");
          if (position!=-1){
            var str = item.description;
            str = str.substring(str.indexOf('.be')+4,str.lastIndexOf('>https')-1);
            console.log(str);
            thumbnail ='https://img.youtube.com/vi/'+str+'/hqdefault.jpg'
          }else{
            null;
          }

          let object = {title : title, description : description, thumbnail : thumbnail, content : content, pubDate : pubDate};
          this.Data.push(object)
        })
    });
}
}
