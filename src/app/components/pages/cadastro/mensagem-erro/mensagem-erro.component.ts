import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem-erro',
  standalone: true,
  imports: [],
  templateUrl: './mensagem-erro.component.html',
  styleUrl: './mensagem-erro.component.css'
})
export class MensagemErroComponent implements OnInit {
  @Input() mensagem = '';

  constructor(){}

  ngOnInit(): void {

  }
}
