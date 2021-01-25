import { Component, OnInit } from '@angular/core';
import { Mercadoria } from './../mercadoria.model';
import { MercadoriasService } from './../mercadorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Loja-criacao',
  templateUrl: './criacao.component.html',
  styleUrls: ['./criacao.component.sass']
})
export class CriacaoComponent implements OnInit {

  mercadoria: Mercadoria = {
    nome: '',
    preco: 0,
    tensao: '',
    emEstoque: true,
    cor: '',
    data: ''
    //data: "01/01/2021"
  }

  constructor(private mercadoriasService: MercadoriasService,
    private router: Router){}

  ngOnInit(): void {
  }


  criarMercadoria(): void{
    this.mercadoriasService.create(this.mercadoria).subscribe(()=>{ 
      this.mercadoriasService.showMessage("Operação executada com sucesso!")
      this.router.navigate(['/mercadorias'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/mercadorias'])
  } 

}
