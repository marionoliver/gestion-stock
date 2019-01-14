import { EuroPipe } from './../euro.pipe';
import { ProduitsService } from './../produits.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../store';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  iwanttoaddaproduct: Boolean = false;
  produits: Array<Produit> = null;
  nomCtl: FormControl;
  fournisseurCtl: FormControl;
  ageCtl: FormControl;
  descriptionCtl: FormControl;
  produitForm: FormGroup;

  constructor(
    private produitsService: ProduitsService,
    private fb: FormBuilder
  ) {
    this.nomCtl = this.fb.control('', Validators.required);
    this.fournisseurCtl = this.fb.control('', Validators.required);
    this.ageCtl = this.fb.control('', [
      Validators.required,
      Validators.pattern('^[0-9]+$')
    ]);
    this.descriptionCtl = this.fb.control('', Validators.required);

    this.produitForm = this.fb.group({
      nom: this.nomCtl,
      fournisseur: this.fournisseurCtl,
      age: this.ageCtl,
      description: this.descriptionCtl
    });
  }

  ngOnInit() {
    this.produits = this.produitsService.list();
  }

  delete(id) {
    this.produitsService.delete(this.produits[id]);
  }

  // mineur(age: number): String {
  //   console.log(this.mineurPipe.transform(age));
  //   return this.mineurPipe.transform(age);
  // }

  addProduit() {
    const produit = new Produit(
      this.produitForm.value.nom,
      this.produitForm.value.fournisseur,
      '',
      new Array(),
      this.produitForm.value.description,
      parseInt(this.produitForm.value.age, 10),
      '',
      null
    );
    this.produitsService.add(produit);
    this.reset();
  }

  reset() {
    this.nomCtl.setValue('');
    this.fournisseurCtl.setValue('');
    this.ageCtl.setValue('');
    this.descriptionCtl.setValue('');
    this.iwanttoaddaproduct = !this.iwanttoaddaproduct;
  }
}
