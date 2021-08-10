import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ModalTarefaConfig, ModalTarefaService } from './shared/services/modal-tarefa.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  overflow: string = 'initial'
  constructor(private modalTarefaService: ModalTarefaService) { }

  ngOnInit(): void {
    this.modalTarefaService.escutarEvento((event: ModalTarefaConfig) => {
      if (event.exibir) {
        this.overflow = 'hidden';
      } else {
        this.overflow = 'initial';
      }
    });
  }
}
