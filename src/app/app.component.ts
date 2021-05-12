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
  nome = '';
  obj: Array<Post> = [];
  favourites: Array<Post> = [];
  important: Boolean = false;
  selezione: Post = new Post();
  main: Boolean = false;
  constructor(private kv: KeyvalueService) {}

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

  deletePost(id: number) {
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

  getKey(k: string) {
    let url = this.kv.apiURL;
    this.kv.apiURL = url.slice(0, 25) + k + url.slice(25);
    console.log(this.kv.apiURL);
    this.kv.getData().subscribe(
      (p: any) => {
        for (let i in p) {
          this.obj.push(p[i]);
        }
      },
      err => console.error('Observer got an error: ' + err)
    );
    this.main = true;
    this.nome = k;
  }

  newKey() {
    this.kv.Key().subscribe(
      (k: any) => {
        let key = k.split('/')[3];
        this.kv.apiKey = key;
        console.log(key);
        this.getKey(key);
      },
      err => console.error('Observer got an error: ' + err)
    );
  }
}
