import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor( private http:HttpClient){
  }
  ObtenerContacto(){
    const repuesta = this.http.get('https://api.whatsapp.com/send?phone=50683105640&text= Hola!%20Quiero%20contratar%20sus%20servicios!')
    return repuesta
  }
}
