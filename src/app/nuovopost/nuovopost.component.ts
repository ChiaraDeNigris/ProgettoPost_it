import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuovopost',
  templateUrl: './nuovopost.component.html',
  styleUrls: ['./nuovopost.component.css']
})
export class NuovopostComponent implements OnInit {
  @Output() nuovoPostEvent = new EventEmitter<Object>();
  constructor() { }
  nuovoPost(titolo: string, testo: string) {
    this.nuovoPostEvent.emit({titolo, testo});
  }
  ngOnInit() {
  }

}