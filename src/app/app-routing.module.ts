import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './views/home/home.component'
import { ListaReceitaComponent } from './lista-receita/lista-receita.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

const routes: Routes = [
  {path: 'receitas', component: ListaReceitaComponent},
  {path: 'add-receita', component: ReceitaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
