import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public msgErro: string = '';
  public carregando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      return;
    }

    this.carregando = true;

    try {
      await this.authService.login(this.form.value);
      this.router.navigateByUrl('/');
    } catch (e) {
      this.msgErro = e.error && e.error.message
        ? e.error.message
        : 'Ocorreu algum erro ao realizar o login, tente novamente mais tarde';
    } finally {
      this.carregando = false;
    }
  }
}
