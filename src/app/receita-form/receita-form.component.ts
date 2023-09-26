import { Component } from '@angular/core';
import { Receita } from '../receita/receita';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../receita/receita.service';
import { ReceitaDTO } from '../receita/receita-dto';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.scss']
})
export class ReceitaFormComponent {
  receita : ReceitaDTO;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private receitaService: ReceitaService
  ){
    this.receita = new ReceitaDTO();
  }

  onSubmit(){
    this.receitaService.save(this.receita).subscribe(result=>this.gotoReceitaList())
  }

  gotoReceitaList(){
    this.router.navigate(['/view-receitas'])
  }
}
