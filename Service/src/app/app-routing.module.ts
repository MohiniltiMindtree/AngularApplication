import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominoesComponent } from './dominoes/dominoes.component';
import { ZomatoComponent } from './zomato/zomato.component';

const routes: Routes = [
 {path:'doninosData', component:DominoesComponent},
 {
  path:'zomatoData', component:ZomatoComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
