import { Component } from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

//esportazione della classe Post, che definisce gli oggetti post it, per renderla visibile negli altri component
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

//esportazione della classe AppComponent per utilizzarne le funzioni definite all' interno
export class AppComponent {
  title: string = 'Post-it';
  titleSez1: string = 'I tuoi post it';
  titleSez2: string = 'Scrivi un nuvo post-it';
  chiave: any = '';
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
    this.kv.apiKey = this.chiave;
    this.obj.push(newPost);
    let msg: string = JSON.stringify(this.obj);
    this.kv
      .postData(msg)
      .then(response => response.json(), error => alert(error))
      .then(data => {
        console.log(data);
      });
  }

  //funzione che elimina il post it selezionato dall' array obj e dall' array favourites e chiama la funzione postData del servizio, che posta tutti i post it tranne quello appena eliminato
  deletePost(id: number) {
    this.obj.splice(id, 1);
    this.favourites.splice(id, 1);
    let msg: string = JSON.stringify(this.obj);
    this.kv.postData(msg)
       .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
  }

  //funzione che mostra solo i post it importanti mediante un filtro
  showImp() {
    this.favourites = this.obj.filter(postit => postit.importante == true);
    this.important = true;
  }

  //funzione che mostra tutti i post it
  showAll() {
    this.important = false;
  }

  //funzione che prende la chiave inserita in input e mostra tutti i post it ad essa associati
  getKey(k: string) {
    this.kv.apiKey = k;
    this.kv
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        console.log(data);
        var oggetto = JSON.parse(data);
        for (let i in oggetto) {
          this.obj.push(oggetto[i]);
        }
        this.main = true;
        this.chiave = k;
      });
  }

  //funzione che restituisce una nuova chiave chiamando la funzione Key nel servizio
  newKey() {
    this.kv.Key().then(key => {
      fetch(this.kv.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      })
        .then(response => response.json(), error => alert(error))
        .then(data => {
          console.log(data);
        });
      this.chiave = key;
    });
    this.main = true;
  }
}
