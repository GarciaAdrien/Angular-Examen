import { Injectable } from '@angular/core';
import {Statistiques } from '../models/Statistiques'

@Injectable({
  providedIn: 'root'
})
export class statistiqueservice {

  constructor() { }
  tabStatistiques : Statistiques[] = [
    {
       identifiant : 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
       titre: 'Démographie en Italie',
       valeur: '60M'

    },
    {
      identifiant : 'fa1f5f40-be3b-11eb-91ec-7f5878982089',
      titre: 'Démographie en France',
      valeur: '90M'
    },
  ];
}




