import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { URL_SERVICES } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpServ: HttpService) { }

  register(data){

    let url = URL_SERVICES + "register"
    return this.httpServ.httpPost(url,data);
  }

}
