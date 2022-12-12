import { catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuturoCandidato } from '../models/futuroCandidato';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<FuturoCandidato[]> {
    return this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/futuros-candidatos`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de futuro candidato");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<FuturoCandidato> {
    return this.http.get<FuturoCandidato>(`${API_CONFIG.baseUrl}/futuros-candidatos/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de futuro candidatos");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(futuroCandidato: FuturoCandidato): Observable<FuturoCandidato> {
    return this.http.post<FuturoCandidato>(`${API_CONFIG.baseUrl}/futuros-candidatos`, futuroCandidato).pipe(
      catchError(error => {
        alert("Erro ao criar novo futuro candidato.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<FuturoCandidato> {
    return this.http.delete<FuturoCandidato>(`${API_CONFIG.baseUrl}/futuros-candidatos/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir futuro candidato.");
        console.error(error);
        return EMPTY;
      })
    );
  }

}