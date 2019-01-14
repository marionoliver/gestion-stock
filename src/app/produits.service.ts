import { Injectable } from "@angular/core";
import { Produit, produits } from "./store";

@Injectable({
  providedIn: "root"
})
export class ProduitsService {
  constructor() {}

  list(): Array<Produit> {
    return produits;
  }

  delete(produit: Produit) {
    for (let i = 0; i < produits.length; i++) {
      if (produits[i].nom === produit.nom) {
        produits.splice(i, 1);
        break;
      }
    }
  }

  add(eleve: Produit) {
    produits.push(eleve);
  }
}
