import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  newProduit = new Produit();
 


  produits: Produit[]; //un tableau de Produit 
  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
  }

  addProduit(){ 
    console.log(this.newProduit); 
  }

}
