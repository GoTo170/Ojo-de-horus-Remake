import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticaDeUsuarioPage } from './politica-de-usuario.page';

describe('PoliticaDeUsuarioPage', () => {
  let component: PoliticaDeUsuarioPage;
  let fixture: ComponentFixture<PoliticaDeUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDeUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
