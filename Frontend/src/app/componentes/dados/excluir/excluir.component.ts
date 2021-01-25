import { Mercadoria } from './../mercadoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MercadoriasService } from './../mercadorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Loja-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.sass']
})
export class ExcluirComponent implements OnInit {

  mercadoria: Mercadoria = {
    nome: '',
    preco: 0,
    tensao: '',
    emEstoque: false,
    cor: '',
    data: ''
  }
  constructor(private MercadoriasService: MercadoriasService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.MercadoriasService.readById(id).subscribe(mercadoria =>{
      this.mercadoria =mercadoria
    })
  }

  excluir(): void{
    console.log(this.mercadoria.id);
    this.MercadoriasService.delete(this.mercadoria.id).subscribe(()=>{
      this.MercadoriasService.showMessage('Produto excluido');
      this.router.navigate(['/mercadorias'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/mercadorias'])
  } 
}
