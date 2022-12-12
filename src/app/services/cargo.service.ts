import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de cargos.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(idCargo: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de cargos.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(
      catchError(error => {
        alert("Erro ao cadastrar novo cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(idCargo: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargo/${idCargo}`).pipe(
      catchError(error => {
        alert("Erro ao excluir cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/cargos/${cargo.idCargo}`, cargo).pipe(
      catchError(error => {
        alert("Erro ao editar cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

}