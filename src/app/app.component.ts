import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

export class Post {
  titolo: string;
  testo: string;
  importante: Boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post-it';
  titleSec1 = 'I tuoi post it';
  titleSec2 = 'Scrivi un nuvo post-it';
  obj: Array<Post> = [];
  favourites: Array<Post> = [];
  important: Boolean = false;
  selezione: Post = new Post();
  constructor(private kv: KeyvalueService) {}

  showTitle() {
    this.kv.getData().subscribe(
      (p: any) => {
        for (let i in p) {
          this.obj.push(p[i]);
        }
        console.log(this.obj);
      },
      err => console.error('Observer got an error: ' + err)
    );
  }

  firtsCall = this.showTitle();

  showPost(id) {
    this.selezione.titolo = this.obj[id].titolo;
    this.selezione.testo = this.obj[id].testo;
    console.log(this.obj);
  }

  addPost(newPost: Post) {
    this.obj.push(newPost);
    this.kv
      .postData(this.obj)
      .subscribe(
        (obj: object) => {},
        err => console.error('Observer got an error: ' + err)
      );
  }

  deletePost(id:number) {
    this.obj.splice(id, 1);
    this.favourites.splice(id, 1);
    this.kv
      .postData(this.obj)
      .subscribe(
        (obj: object) => {},
        err => console.error('Observer got an error: ' + err)
      );
    this.selezione.testo = undefined;
  }

  showImp() {
    this.favourites = this.obj.filter(postit => postit.importante == true);
    console.log(this.favourites);
    this.important = true;
  }

  showAll() {
    this.important = false;
  }

  getKey(x:string){
    alert(x);
  }

  newKey(){
    console.log(this.obj);
  }
}
