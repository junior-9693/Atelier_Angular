import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    ProduitsComponent
  ],
  imports: [
      BrowserModule, 
      AppRoutingModule, 
      FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
