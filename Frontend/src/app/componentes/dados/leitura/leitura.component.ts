import { MercadoriasService } from './../mercadorias.service';
import { Mercadoria } from './../mercadoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Loja-leitura',
  templateUrl: './leitura.component.html',
  styleUrls: ['./leitura.component.sass']
})
export class LeituraComponent implements OnInit {

  mercadorias: Mercadoria[] = [];
  displayedColumns = ['nome' ,'preço', 'tensao', 'cor', 'emEstoque', 'data', 'action']


  constructor(private mercadoriasService: MercadoriasService) { }

  async ngOnInit() {
    this.mercadoriasService.read().subscribe(mercadorias =>{
      this.mercadorias = mercadorias
      console.log(mercadorias)
    })
  }
}
