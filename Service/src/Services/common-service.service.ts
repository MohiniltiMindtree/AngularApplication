import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dominos } from 'src/Model/dominos';

import { Zomato } from 'src/Model/zomato';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
//http://localhost:9091/dominos/getAllDominos

dominos:Dominos={
  did: 0,
  name: '',
  address: ''
}

   url="http://localhost:9092/";

  constructor(private http:HttpClient) { }

  getAllDoninos(): Observable<Dominos[]>{
    console.log("get all doninos through API Gateway")
    return this.http.get<Dominos[]>(this.url+ "dominos/getAllDominos");
  }

  getAllZomato(): Observable<Dominos[]>{
    console.log("get all Zomato through API Gateway")
    return this.http.get<Dominos[]>(this.url+ "zomato/getAllzomato");
  }

  saveDominos(dominoss:Dominos):Observable<Dominos>{
    return this.http.post<Dominos>(this.url+ "dominos/saveDominos" ,dominoss);
  }

  saveZomato(zomatoo:Dominos):Observable<Dominos>{
    return this.http.post<Dominos>(this.url+ "zomato/savezomato" ,zomatoo);
  }
}
