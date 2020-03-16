import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PromotionComponent } from './modules/promotion/promotion.component';
import { QualificatifComponent } from './modules/qualificatif/qualificatif.component';
import { HomeComponent } from './modules/home/home.component';
import { DialogInfoComponent } from './modules/dialog-info/dialog-info.component';
import { QualificatifAddComponent } from './modules/qualificatif-add/qualificatif-add.component';
import { QualificatifUpdateComponent } from './modules/qualificatif-update/qualificatif-update.component';
import { EtudiantListComponent } from './modules/etudiant-list/etudiant-list.component';
import { EtudiantFormComponent } from './modules/etudiant-form/etudiant-form.component';
import {DetailFormComponent} from './modules/detail-form/detail-form.component';
import {EtudiantUpdateComponent} from './etudiant-update/etudiant-update.component';
import { from } from 'rxjs';



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
    path: 'Qualificatif/add',
    component: QualificatifAddComponent
  },
  {
    path: 'Qualificatif/update/:id/:min/:max',
    component: QualificatifUpdateComponent
  },
  { path: 'Etudiant/etudiants', 
    component: EtudiantListComponent },

  { path: 'form', 
    component: EtudiantFormComponent }
    ,

  { path: 'add/', 
    component: EtudiantFormComponent }
    ,

  { path: 'detail/:noEtu', 
    component: DetailFormComponent }
    ,

  { path: 'modif', 
    component: EtudiantUpdateComponent }
  ,{
    path: '',
    component: HomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
