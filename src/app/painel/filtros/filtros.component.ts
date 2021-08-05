import { Component, OnInit } from '@angular/core';
import { StatusEnum } from '../shared/enums/status.enum';
import { Filtro } from '../shared/models/filtro.model';
import { Status } from '../shared/models/status.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  public filtro: Filtro = new Filtro();
  public listaDeStatus: Status[] = StatusEnum.todosStatus();
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    console.log('toggle modal');
  }

  filtrarTarefas() {
    console.log('filtrar tarefas', JSON.stringify(this.filtro));
  }

  limparFiltro() {
    this.filtro.periodoDe = '';
    this.filtro.periodoAte = '';
    this.filtro.status = StatusEnum.TODAS;
    this.filtrarTarefas();
  }
}
