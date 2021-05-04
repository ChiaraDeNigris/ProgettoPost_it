import { Component} from '@angular/core';
import { KeyvalueService } from './keyvalue.service';

export class Post {
  titolo: string;
  testo: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title = "I miei post-it";
  ob: Object = {};
  selezione: Post = new Post();
  constructor(private kv: KeyvalueService) {}

  showPost(id) {
    this.selezione.titolo = this.ob[id].titolo;
    this.selezione.testo = this.ob[id].testo;
    console.log(this.ob[id])
  }

showTitle() {
  this.kv.getData().subscribe(
    (p: any) => { 
      this.ob = p;
      },
    err => console.error("Observer got an error: " + err)
    );
  }

firtsCall = this.showTitle();




addPost(newPost: Object) {
  var k : any;
  for (let data in this.ob ) {
    var chiavi = Object.keys(this.ob);
    var len = chiavi.length;
    k = parseInt(chiavi[len-1]);
  }
  let i: number = k + 1;
  var temp = { [i] : newPost };
  this.ob = Object.assign(this.ob, temp);
  this.kv.postData(this.ob).subscribe( (ob: object) => {},
  err => console.error("Observer got an error: " + err)
  );
}

deletePost(id) {
  delete this.ob[id];
  this.kv.postData(this.ob).subscribe( (ob: object) => {},
  err => console.error("Observer got an error: " + err)
  );
}

}


