import { Mercadoria } from './mercadoria.model';
import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
//import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  baseUrl = "http://localhost:3001/mercadorias"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'Fechar',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(mercadoria: Mercadoria): Observable<Mercadoria> {
    return this.http.post<Mercadoria>(this.baseUrl, mercadoria)
  }
  
  read(): Observable<Mercadoria[]>{
    return this.http.get<Mercadoria[]>(this.baseUrl)
  }

  readById(id: string): Observable<Mercadoria>{
    const url = `${this.baseUrl}/${id}` //Concateno a Url base com o id do produto
    return this.http.get<Mercadoria>(url)
  }

  update(mercadoria: Mercadoria): Observable<Mercadoria>{
    const url = `${this.baseUrl}/${mercadoria.id}`
    return this.http.put<Mercadoria>(url, mercadoria)
  }

  delete(id: string): Observable<Mercadoria>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Mercadoria>(url)
  }
}
