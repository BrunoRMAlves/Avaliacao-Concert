import { Usuario } from './usuarios.model';
import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
//import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = "http://localhost:3001/usuarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'Fechar',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }
  
  read(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl)
  }

  readById(id: string): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}` //Concateno a Url base com o id do produto
    return this.http.get<Usuario>(url)
  }

  update(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/${usuario.login}`
    return this.http.put<Usuario>(url, usuario)
  }

  delete(id: string): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Usuario>(url)
  }
}
