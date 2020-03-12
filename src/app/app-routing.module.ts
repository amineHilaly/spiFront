import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PromotionComponent } from './modules/promotion/promotion.component';
import { QualificatifComponent } from './modules/qualificatif/qualificatif.component';
import { HomeComponent } from './modules/home/home.component';
import { DialogInfoComponent } from './modules/dialog-info/dialog-info.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'Promotion',
    component: PromotionComponent,
    children:[{
      
        path:'Etudiantspromotion/:annee/:formation',
        component:DialogInfoComponent
      
    }]
  }, {
    path: 'Qualificatif',
    component: QualificatifComponent
  },
  {
    path: '',
    component: HomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
