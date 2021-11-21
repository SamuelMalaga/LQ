import { TestBed } from '@angular/core/testing';

import { AlunoCadastroService } from './aluno-cadastro.service';

describe('AlunoCadastroService', () => {
  let service: AlunoCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
