import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { MaiorIdadeDirective } from '../../../directives/maior-idade.directive';
import { ConsultaCepService } from '../../../service/consulta-cep.service';
import { ValidarCepDirective } from '../../../directives/validar-cep.directive';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, MensagemErroComponent, MaiorIdadeDirective, ValidarCepDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ConsultaCepService
  ){}

  ngOnInit(): void {

  }

  cadastrar(form: NgForm){
    if (form.valid){
      this.router.navigate(['/sucesso'])
    }
    console.log(form.controls)
  }

  consultarCEP(ev: any, formulario: NgForm){
    const cep = ev.target.value;

    if (cep != ''){
      this.service.getConsultarCep(cep).subscribe(response => {
        this.preencendoEndereco(response, formulario);
      });
    }
  }

  preencendoEndereco(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

}
