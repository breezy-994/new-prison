import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {

  constructor(private httpClient:HttpClient) { }

  getSaluti(){
    return this.httpClient.get('http://localhost:8081/api/saluti/');
  }
}
