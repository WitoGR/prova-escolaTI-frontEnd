import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from './receita';
import { ReceitaDTO } from './receita-dto';


@Injectable()
export class ReceitaService {
  private receitaUrl: string;

  constructor(private http: HttpClient) {
    this.receitaUrl = 'http://localhost:8080/';
   }

   public findAll() : Observable<Receita[]>{
      this.receitaUrl = 'http://localhost:8080/view-receitas'
      return this.http.get<Receita[]>(this.receitaUrl)
   }

   public save(receita: ReceitaDTO){
      this.receitaUrl = 'http://localhost:8080/add-receita'
      return this.http.post<ReceitaDTO>(this.receitaUrl, receita);
   }
}
