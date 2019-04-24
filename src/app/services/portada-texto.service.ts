import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortadaTextoService {

  titulo:string;
  dia:string;
  hora:string;
  lugar:string;
  descripcion:string;
  media:string;
  backUrl:string;
  mediaType:string;

  constructor() { }
}
