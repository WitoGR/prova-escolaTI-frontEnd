import { Component } from '@angular/core';
import { ReceitaService } from '../receita/receita.service';
import { Receita } from '../receita/dto/receita';

@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.scss']
})
export class ListaReceitaComponent {
  receitas: Receita[] = [];

  constructor(private receitaService: ReceitaService){}

  ngOnInit(){
    this.receitaService.findAll().subscribe(data=>{
      this.receitas = data;
    })
  }
}
