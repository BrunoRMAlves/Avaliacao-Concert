import { Mercadoria } from './../mercadoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MercadoriasService } from './../mercadorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Loja-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.sass']
})
export class AtualizacaoComponent implements OnInit {

  

  constructor(private MercadoriasService: MercadoriasService, private router:Router, private route:ActivatedRoute) { }

  mercadoria!: Mercadoria;

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.MercadoriasService.readById(id).subscribe(mercadoria => {
      this.mercadoria = mercadoria;
    });
  }

  updateProduct(): void{
    this.MercadoriasService.update(this.mercadoria).subscribe(()=>{
      this.MercadoriasService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/mercadorias'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/mercadorias'])
  }
}
