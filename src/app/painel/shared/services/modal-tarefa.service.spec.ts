import { TestBed } from '@angular/core/testing';

import { ModalTarefaService } from './modal-tarefa.service';

describe('ModalTarefaService', () => {
  let service: ModalTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
