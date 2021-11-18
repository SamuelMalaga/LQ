import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCadastroComponent } from './materias-cadastro.component';

describe('MateriasCadastroComponent', () => {
  let component: MateriasCadastroComponent;
  let fixture: ComponentFixture<MateriasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
