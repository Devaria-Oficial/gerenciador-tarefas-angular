import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UsuarioLogado } from 'src/app/auth/usuario-logado.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public usuarioLogado: UsuarioLogado | null;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuarioLogado = this.authService.obterUsuarioLogado()
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.authService.deslogar();
    this.router.navigateByUrl('/login');
  }

  abrirModalAdicionarTarefa() {
    console.log('abrir modal');
  }
}
