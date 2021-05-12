import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css']
})

export class VisualizzazioneComponent implements OnInit {
  //dichiarazione di un oggetto di classe Post 
  @Input() selezioneC: Post;
  clean() {
    this.selezioneC.testo = undefined;
  }
  ngOnInit() {
  }
}