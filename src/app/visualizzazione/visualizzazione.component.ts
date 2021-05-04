import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-visualizzazione',
  templateUrl: './visualizzazione.component.html',
  styleUrls: ['./visualizzazione.component.css']
})

export class VisualizzazioneComponent implements OnInit {
  @Input() selezioneC: Post;
  constructor() { }
  clean() {
    this.selezioneC.testo = undefined;
  }
  ngOnInit() {
  }

}