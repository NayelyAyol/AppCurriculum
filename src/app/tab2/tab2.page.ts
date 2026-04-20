import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonThumbnail,
  IonSegment,
  IonSegmentButton,
  IonAvatar,
  IonChip,
  IonBadge,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
  IonRange,
  IonAccordion,
  IonAccordionGroup,
  IonToggle,
  IonText
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  school,
  person,
  code,
  download,
  call,
  mail,
  location
} from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonItem,
    IonLabel,
    IonList,
    IonListHeader,

    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonThumbnail,

    IonSegment,
    IonSegmentButton,

    IonAvatar,
    IonChip,
    IonBadge,
    IonIcon,

    IonGrid,
    IonRow,
    IonCol,

    IonProgressBar,
    IonRange,

    IonAccordion,
    IonAccordionGroup,
    IonToggle,

    IonText
  ]
})
export class Tab2Page {

  constructor() {
    addIcons({
      school,
      person,
      code,
      download,
      call,
      mail,
      location
    });
  }

}