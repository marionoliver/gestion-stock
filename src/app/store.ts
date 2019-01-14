export class Produit {
  private _nom: string;
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }

  private _fournisseur: string;
  public get fournisseur(): string {
    return this._fournisseur;
  }
  public set fournisseur(value: string) {
    this._fournisseur = value;
  }

  private _emailFournisseur: string;
  public get emailFournisseur(): string {
    return this._emailFournisseur;
  }
  public set emailFournisseur(value: string) {
    this._emailFournisseur = value;
  }

  private _ingredients: Array<String>;
  public get ingredients(): Array<String> {
    return this._ingredients;
  }
  public set ingredients(value: Array<String>) {
    this._ingredients = value;
  }

  private _description: string;
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  private _age: number;
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  private _conditionConservation: string;
  public get conditionConservation(): string {
    return this._conditionConservation;
  }
  public set conditionConservation(value: string) {
    this._conditionConservation = value;
  }

  private _prix: number;
  public get prix(): number {
    return this._prix;
  }
  public set prix(value: number) {
    this._prix = value;
  }

  constructor(
    nom: string,
    fournisseur: string,
    emailFournisseur: string,
    ingredients: Array<String>,
    description: string,
    age: number,
    conditionConservation: string,
    prix: number
  ) {
    this.nom = nom;
    this.fournisseur = fournisseur;
    this.emailFournisseur = emailFournisseur;
    this.ingredients = ingredients;
    this.description = description;
    this.age = age;
    this.conditionConservation = conditionConservation;
    this.prix = prix;
  }

}

const list1Ingredient = ['ingredient1', 'ingredient2'];
const produit1: Produit = new Produit(
  'Produit1',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 1',
  21,
  'condition conservation 1',
  12.0
);
const produit2: Produit = new Produit(
  'Produit2',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 2gdrfsgfrdgfrsdhflrldfhiserhtmkstrhmhstjhstmjhstmhetmjhetmhsetmhetmhioetmhioqetmhioqet',
  21,
  'condition conservation 2',
  12.0
);
const produit3: Produit = new Produit(
  'Produit3',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 3',
  12,
  'condition conservation 3',
  12.0
);
const produit4: Produit = new Produit(
  'Produit4',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 4',
  30,
  'condition conservation 4',
  12.0
);
const produit5: Produit = new Produit(
  'Produit5',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 5',
  54,
  'condition conservation 5',
  120000
);
const produit6: Produit = new Produit(
  'Produit6',
  'Fournisseur Clément',
  'founisseur.clement@gmail.com',
  list1Ingredient,
  'description produit 6',
  22,
  'condition conservation 6',
  12.0
);

export const produits: Array<Produit> = new Array(
  produit1,
  produit2,
  produit3,
  produit4,
  produit5,
  produit6
);
