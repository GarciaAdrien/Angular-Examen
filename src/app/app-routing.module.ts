import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutComponent } from '../app/ajout/ajout.component';
import { ListeComponent } from '../app/liste/liste.component';

const routes: Routes = [
  { path: "ajout", component: AjoutComponent},
  { path: "liste", component: ListeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
