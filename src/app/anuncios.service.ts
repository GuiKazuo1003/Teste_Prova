import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncios } from './anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/anuncio";

  getAnuncios(): Observable <Anuncios[]> {
    return this.http.get<Anuncios[]>(this.url);
  }

  Cadastrar(anuncios: Anuncios): Observable<Anuncios> {
    return this.http.post<Anuncios>(this.url, anuncios);
  }
}
