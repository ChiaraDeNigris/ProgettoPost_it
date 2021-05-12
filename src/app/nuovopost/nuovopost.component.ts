import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopost',
  templateUrl: './nuovopost.component.html',
  styleUrls: ['./nuovopost.component.css']
})
export class NuovopostComponent {
  @Output() nuovoPostEvent = new EventEmitter<Object>();
  nuovoPost(titolo: string, testo: string, importante: Boolean) {
    if (titolo != '') {
      this.nuovoPostEvent.emit({ titolo, testo, importante });
    } else {
      alert('Inserisci titolo!');
    }
  }
}
