import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Crud1 } from "../models/crud1.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable
({
    providedIn: 'root'
})

export class Crud1Service
{
    // parâmetro por injeção de dependência
    constructor (private httpClient: HttpClient)
    { }

    getCrud1(): Observable<Crud1[]>
    {
        return this.httpClient.get<Crud1[]>(environment.apiCrud1);
    }
}