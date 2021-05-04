
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { VisualizzazioneComponent } from './visualizzazione/visualizzazione.component';
import { NuovopostComponent } from './nuovopost/nuovopost.component';
import { KeyvalueService } from './keyvalue.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, VisualizzazioneComponent, NuovopostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [KeyvalueService]
})
export class AppModule { }
