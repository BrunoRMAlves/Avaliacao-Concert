import { LoaderModule } from './loader/loader.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule} from 'ngx-loading'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatToolbarModule } from '@angular/material/toolbar';
import { CriacaoComponent } from './componentes/dados/criacao/criacao.component';
import { LeituraComponent } from './componentes/dados/leitura/leitura.component';
import { AtualizacaoComponent } from './componentes/dados/atualizacao/atualizacao.component';
import { ExcluirComponent } from './componentes/dados/excluir/excluir.component';
import { HomeComponent } from './paginas/home/home.component';
import { MercadoComponent } from './paginas/mercado/mercado.component';
import { LoginComponent } from './paginas/login/login.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
//import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';


import {MatSelectModule} from '@angular/material/select';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { PerfilAdmComponent } from './paginas/perfil-adm/perfil-adm.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoaderComponent } from './loader/loader.component';
//import { CepComponent } from './paginas/cep/cep.component';
//import { LoaderComponent } from './componentes/loader/loader.component';

registerLocaleData(localePt); //Faz a localização para o português



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CriacaoComponent,
    LeituraComponent,
    AtualizacaoComponent,
    ExcluirComponent,
    HomeComponent,
    MercadoComponent,
    LoginComponent,
    FavoritosComponent,
    //CarrinhoComponent,
    PerfilAdmComponent,
    ClientesComponent
    //LoaderComponent,
   // CepComponent
    //LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    LoaderModule,
    NgxLoadingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
