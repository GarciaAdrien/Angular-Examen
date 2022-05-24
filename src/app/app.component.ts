import { Component, Input, OnInit } from '@angular/core';
import {Statistiques } from './models/Statistiques'
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Supprimer(){
    this.statistique1.splice(1);
  };
  ngOnInit(): void {
  }
/*
  @Input() statistique1: Statistiques = new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", "Démographie en Italie", "60M”");
  @Input() statistique2: Statistiques = new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5878982089", "Démographie en France", "90M”");
*/
statistique1: Statistiques[] = [
new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5875ecfb46", "Démographie en Italie", "60M"),
new Statistiques("fa1f5f40-be3b-11eb-91ec-7f5878982089", "Démographie en France", "90M")];

constructor(private http: HttpClient
  ) {

    this.http.get<Statistiques[]>("https://stats.naminilamy.fr").subscribe(
      res => {
        for (const statistique of res) {
          this.statistique1.push(new Statistiques(statistique.identifiant, statistique.titre, statistique.valeur));
        }
      });
    }
  }
  /*setTimeout(() => {
    this.statistique1[0].identifiant = 'test'
    this.statistique1[0].valeur = 'test'
    this.statistique1[0].titre = 'test'

  }, 2000);
*/

