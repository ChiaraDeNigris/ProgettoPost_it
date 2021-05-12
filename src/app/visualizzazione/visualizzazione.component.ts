import { Component, Input } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css']
})

export class VisualizzazioneComponent  {
  //dichiarazione di un oggetto di classe Post 
  @Input() selezioneC: Post;
  clean() {
    this.selezioneC.testo = undefined;
  }
}