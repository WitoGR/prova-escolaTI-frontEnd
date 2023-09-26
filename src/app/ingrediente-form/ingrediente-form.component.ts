import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReceitaService } from '../receita/receita.service';
import { IngredienteDto } from '../receita/dto/ingrediente-dto';

@Component({
  selector: 'app-ingrediente-form',
  templateUrl: './ingrediente-form.component.html',
  styleUrls: ['./ingrediente-form.component.scss']
})
export class IngredienteFormComponent {
  ingrediente : IngredienteDto;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private receitaService: ReceitaService
  ){
    this.ingrediente = new IngredienteDto();
  }

  onSubmit(){
    this.receitaService.saveIngrediente(this.ingrediente).subscribe(result=>this.gotoReceitaList())
  }

  gotoReceitaList(){
    this.router.navigate(['/receitas'])
  }

}
