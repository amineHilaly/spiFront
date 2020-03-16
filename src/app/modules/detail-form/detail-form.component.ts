import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../etudiant.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Etudiant } from '../../etudiant';
import { DomaineService } from '../../domaine.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  public static etudiant: any;
  private myForm: FormGroup;
  numeroEtudiant: any;
      nom: any;
      prenom: any;
      sex: any;
      dateNaissance: any;
      lieuNaissance: any;
      nationalite: any;
      email: any;
      emailUbo: any;
      numPortable: any;
      numFixe: any;
      adresse: any;
      codePostal:  any;
      ville: any;
      paysOrigine: any;
      universiteOrigine: any;
      groupeTp: any;
      groupeAnglais: any;
      promotion: any;
  constructor(private etudiantService: EtudiantService, private router: Router, private route: ActivatedRoute) {
    if(DetailFormComponent.etudiant == undefined){
      router.navigateByUrl('/Etudiant/etudiants')
    }
    this.myForm = new FormGroup({
      numeroEtudiant: new FormControl(),
      nom: new FormControl(),
      prenom: new FormControl(),
      sex: new FormControl(),
      dateNaissance: new FormControl(),
      lieuNaissance: new FormControl(),
      nationalite: new FormControl(),
      email: new FormControl(),
      emailUbo: new FormControl(),
      numPortable: new FormControl(),
      numFixe: new FormControl(),
      adresse: new FormControl(),
      codePostal: new FormControl(),
      ville: new FormControl(),
      paysOrigine: new FormControl(),
      universiteOrigine: new FormControl(),
      groupeTp: new FormControl(),
      groupeAnglais: new FormControl(),
      promotion: new FormControl()
    })
    this.numeroEtudiant= DetailFormComponent.etudiant['noEtudiant'];
    this.nom= DetailFormComponent.etudiant['nom'];
    this. prenom= DetailFormComponent.etudiant['prenom'];
    this. sex= DetailFormComponent.etudiant['sexe'];
    this. dateNaissance= DetailFormComponent.etudiant['dateNaissance'].substring(0,10);
    this. lieuNaissance= DetailFormComponent.etudiant['lieuNaissance'];
    this. nationalite= DetailFormComponent.etudiant['nationalite'];
    this. email= DetailFormComponent.etudiant['email'];
    this. emailUbo= DetailFormComponent.etudiant['emailUbo'];
    this. numPortable= DetailFormComponent.etudiant['mobile'];
    this. numFixe= DetailFormComponent.etudiant['telephone'];
    this. adresse= DetailFormComponent.etudiant['adresse'];
    this. codePostal= DetailFormComponent.etudiant['codePostal'];
    this. ville= DetailFormComponent.etudiant['ville'];
    this. paysOrigine= DetailFormComponent.etudiant['paysOrigine'];
    this. universiteOrigine= DetailFormComponent.etudiant['universiteOrigine'];
    this. groupeTp= DetailFormComponent.etudiant['groupeTp'];
    this. groupeAnglais= DetailFormComponent.etudiant['groupeAnglais'];
    this. promotion= DetailFormComponent.etudiant['promotion']['promotionPK']['anneeUniversitaire'] + ' ' + DetailFormComponent.etudiant['promotion']['promotionPK']['formation']['codeFormation'];
    console.log(DetailFormComponent.etudiant);
    
    
  }

  ngOnInit() {



  }



  processForm() {

  }

}
