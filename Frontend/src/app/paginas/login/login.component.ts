import { UsuariosService } from './../../componentes/dados/usuarios.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Usuario } from './../../componentes/dados/usuarios.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'Loja-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    login: '',
    senha: ''
  }



  constructor(private usuariosService: UsuariosService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  entrar(): void{
    if(this.usuario.login == "concert" && this.usuario.senha == "prova"){
      this.snackBar.open("Login enfetuado com sucesso!", 'Fechar',{
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      })
      this.router.navigate(['/mercadorias'])
    }
    else{
      this.snackBar.open("Usuário ou senha incorretos", 'Fechar',{
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
    }
  }

  criarUsuario(): void{  
      this.usuariosService.create(this.usuario).subscribe(()=>{
      this.usuariosService.showMessage('Usuário Criado')
      this.router.navigate(['/mercadorias'])
    })
  }


}
