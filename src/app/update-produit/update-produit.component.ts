import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService) {

  }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.currentProduit = this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params.id);
    console.log(this.currentProduit);
  }
  updateProduit() {
    //console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
  }


}
