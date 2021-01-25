//import { CepComponent } from './paginas/cep/cep.component';
import { ExcluirComponent } from './componentes/dados/excluir/excluir.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
//import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { MercadoComponent } from './paginas/mercado/mercado.component';
import { CriacaoComponent } from './componentes/dados/criacao/criacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { AtualizacaoComponent } from './componentes/dados/atualizacao/atualizacao.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent,
  },{
  path: "mercadorias",
  component: MercadoComponent,
  },{
  path: "addMercadoria",
  component: CriacaoComponent,
  },{
  path: "mercadorias/atualizar/:id",
  component: AtualizacaoComponent,
  },{
  path: "mercadorias/apagar/:id",
  component: ExcluirComponent,
  },{
  path: "vendas",
  component: ClientesComponent,
  }, {
  path: "login",
  component: LoginComponent
  },{
  path: "perfil_adm",
  component: LoginComponent
  },{
  path: "favoritos",
  component: FavoritosComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
