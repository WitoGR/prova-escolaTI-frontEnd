import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaReceitaComponent } from './lista-receita/lista-receita.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReceitaService } from './receita/receita.service';
import { IngredienteFormComponent } from './ingrediente-form/ingrediente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListaReceitaComponent,
    ReceitaFormComponent,
    IngredienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ReceitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
