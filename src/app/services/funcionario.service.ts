import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }


public findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de funcionario");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public findById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de funcionario");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios`, funcionario).pipe(
      catchError(error => {
        alert("Erro ao criar novo funcionario.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir Funcionario.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`, funcionario).pipe(
      catchError(error => {
        alert("Erro ao editar cliente.");
        console.error(error);
        return EMPTY;
      })
    );
  }

}
