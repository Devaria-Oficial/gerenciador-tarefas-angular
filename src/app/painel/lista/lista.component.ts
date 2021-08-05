import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/models/tarefa.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public tarefas: Tarefa[] = [];
  constructor() { }

  ngOnInit(): void {
    const tarefa = new Tarefa('Teste', '2021-08-01');
    const tarefa2 = new Tarefa('Teste', '2021-09-01');
    tarefa2.dataConclusao = '2021-09-02';

    this.tarefas.push(tarefa);
    this.tarefas.push(tarefa2);
  }

  selecionarTarefa(tarefa: Tarefa) {
    if (tarefa.dataConclusao) {
      return;
    }

    console.log('tarefa com id = ' + tarefa.nome + ' foi selecionada');
  }

  obterIconeDaTarefa(tarefa: Tarefa) {
    if (tarefa.dataConclusao) {
      return 'check-concluido.svg';
    }

    return 'check.svg';
  }
}
