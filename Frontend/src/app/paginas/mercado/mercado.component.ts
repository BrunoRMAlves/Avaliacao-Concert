import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'Loja-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.sass']
})
export class MercadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCriar(): void {
    this.router.navigate(['/addMercadoria'])
  }

}
