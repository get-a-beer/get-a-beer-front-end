import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Viacep } from '../model/viacep';
import { Observable } from 'rxjs';

@Injectable()
export class ViaCepService{
    
    constructor(private http: HttpClient){}
    
    getCep(cep: number): Observable<Viacep>{
        //const api = `https://viacep.com.br/ws/${cep}/json/`;
        //return this.http.get<Viacep>(api).pipe();
        console.log("Holla");
        return null;
    }
}