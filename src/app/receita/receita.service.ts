import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from './dto/receita';
import { ReceitaDTO } from './dto/receita-dto';
import { IngredienteDto } from './dto/ingrediente-dto';


@Injectable()
export class ReceitaService {
  private receitaUrl: string;

  constructor(private http: HttpClient) {
    this.receitaUrl = 'http://localhost:8080/';
   }

   public findAll() : Observable<Receita[]>{
      this.receitaUrl = 'http://localhost:8080/view-receitas';
      return this.http.get<Receita[]>(this.receitaUrl)
   }

   public saveReceita(receita: ReceitaDTO){
      this.receitaUrl = 'http://localhost:8080/add-receita';
      return this.http.post<ReceitaDTO>(this.receitaUrl, receita);
   }

   public saveIngrediente(ingrediente: IngredienteDto){
      this.receitaUrl = 'http://localhost:8080/add-ingrediente';
      return this.http.post<IngredienteDto>(this.receitaUrl, ingrediente);
   }
}
