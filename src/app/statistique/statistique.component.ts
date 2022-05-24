import { Component, Input, OnInit } from '@angular/core';
import {Statistiques } from '../models/Statistiques'
import { statistiqueservice } from '../services/statistique';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() statistique!: Statistiques;
 public  tabStatistiques;

  constructor(refSingleton : statistiqueservice)
  {
this.tabStatistiques =  refSingleton.tabStatistiques

   }


  ngOnInit(): void {
  }

}
