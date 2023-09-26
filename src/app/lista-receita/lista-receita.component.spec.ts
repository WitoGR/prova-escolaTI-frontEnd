import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReceitaComponent } from './lista-receita.component';

describe('ListaReceitaComponent', () => {
  let component: ListaReceitaComponent;
  let fixture: ComponentFixture<ListaReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReceitaComponent]
    });
    fixture = TestBed.createComponent(ListaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
