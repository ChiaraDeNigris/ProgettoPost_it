import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

//esportiamo la classe Post, che definisce gli oggetti post it, per renderla visibile negli altri component
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

//esportiamo la classe AppComponent per utilizzarne le funzioni definite all' interno
export class AppComponent {
  title: string = 'Post-it';
  titleSez1: string = 'I tuoi post it';
  titleSez2: string = 'Scrivi un nuvo post-it';
  nome: string = '';
  obj: Array<Post> = [];
  favourites: Array<Post> = [];
  important: Boolean = false;
  main: Boolean = false;
  //creazione di un nuovo oggetto associato alla classe Post
  selezione: Post = new Post();
  //istanzio un oggetto del servizio chiave
  constructor(private kv: KeyvalueService) {}

  //funzione che inizializza le proprietà dell'oggetto selezione
  showPost(id) {
    this.selezione.titolo = this.obj[id].titolo;
    this.selezione.testo = this.obj[id].testo;
  }

  //funzione che aggiunge un oggetto nell' array obj e chiama la funzione postData del servizio, che esegue una Post del post it appena aggiunto
  addPost(newPost: Post) {
    this.obj.push(newPost);
    this.kv.postData(this.obj).subscribe(
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
