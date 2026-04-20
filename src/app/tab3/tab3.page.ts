import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonAvatar,
  IonText,
  IonNote,
  IonFab,
  IonFabButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { call, mail, location, logoWhatsapp } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonAvatar,
    IonText,
    IonNote,

    IonFab,
    IonFabButton
  ]
})
export class Tab3Page {

  constructor() {
    addIcons({
      call,
      mail,
      location,
      logoWhatsapp
    });
  }

}