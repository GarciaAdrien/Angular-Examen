import { Component, OnInit } from '@angular/core';
import {Statistiques } from './models/Statistiques'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  statistique1: Statistiques = new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", "Démographie en Italie", "60M”");
  statistique2: Statistiques = new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5878982089", "Démographie en France", "90M”");
  constructor() {
{


    }



  }
}


