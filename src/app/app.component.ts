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
  title = "Post-it";
  titleSec1 = "I tuoi post it";
  titleSec2 = "Scrivi un nuvo post-it";
  obj: Object = {};
  selezione: Post = new Post();
  constructor(private kv: KeyvalueService) {}
  
  showTitle() {
    this.kv.getData().subscribe( (p: any) => { this.obj = p;},
    err => console.error("Observer got an error: " + err)
    );
  }

  firtsCall = this.showTitle();

  showPost(id) {
    this.selezione.titolo = this.obj[id].titolo;
    this.selezione.testo = this.obj[id].testo;
    console.log(this.obj);
  }

  addPost(newPost: Object) {
    var k : any = 0;
    for (let data in this.obj ) {
      var chiavi = Object.keys(this.obj);
      var len = chiavi.length;
      k = parseInt(chiavi[len-1]);
    }
    let i: number = k + 1;
    var temp = { [i] : newPost };
    this.obj = Object.assign(this.obj, temp);
    this.kv.postData(this.obj).subscribe( (obj: object) => {},
    err => console.error("Observer got an error: " + err)
    );
  }

  deletePost(id) {
    delete this.obj[id];
    this.kv.postData(this.obj).subscribe( (obj: object) => {},
    err => console.error("Observer got an error: " + err)
    );
  }

   importantPost(id) {
    id.classList.add("importante");
    
  }

}


