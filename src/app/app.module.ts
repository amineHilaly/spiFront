import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './modules/home/home.component';
import { DialogComponent } from './modules/dialog/dialog.component';
import { DialogInfoComponent } from './modules/dialog-info/dialog-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QualificatifAddComponent } from './modules/qualificatif-add/qualificatif-add.component';
import { QualificatifUpdateComponent } from './modules/qualificatif-update/qualificatif-update.component';
import { EtudiantListComponent } from './modules/etudiant-list/etudiant-list.component';
import { EtudiantFormComponent } from './modules/etudiant-form/etudiant-form.component';
import { DetailFormComponent } from './modules/detail-form/detail-form.component';
import { EtudiantService } from './etudiant.service';
import { EtudiantUpdateComponent } from './etudiant-update/etudiant-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    DialogInfoComponent,
    QualificatifAddComponent,
    QualificatifUpdateComponent,
    EtudiantListComponent,
    EtudiantFormComponent,
    DetailFormComponent,
    EtudiantUpdateComponent
  ],
  entryComponents: [DialogComponent,
    DialogInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
