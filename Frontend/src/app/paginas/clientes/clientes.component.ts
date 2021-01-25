import { ServicosService } from './../../componentes/dados/servicos.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms"


@Component({
  selector: 'Loja-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent implements OnInit {

  formulario!: FormGroup 

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private snackBar:MatSnackBar) { }



  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      idade: [null, [Validators.required]],
      valor_compra: [null, [Validators.required]]
    })
      
  }

  onSubmit(): void{
    console.log(this.formulario)
    this.http.post('http://localhost:3001/clientes', JSON.stringify(this.formulario.value))
    //.map(res=>res)
    //.subscribe(dados => console.log(dados))
    if(this.formulario.valid){
    this.snackBar.open("Cliente Cadastrado", 'Fechar',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
    this.formulario.reset()
    }
    else{
      this.snackBar.open("Formulário com erros", 'Fechar',{
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
    }
}


  limpar(): void{
    this.formulario.reset()
  }
}
