import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[MaiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }],
  standalone: true
})

export class MaiorIdadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
      const dataNascimento = control.value;

      const anoNascimento  = new Date(dataNascimento).getFullYear();

      const anoCompleta18 = anoNascimento + 18;

      const anoAtual = new Date().getFullYear();

      const verificacaoMaiorIdade = anoCompleta18 <= anoAtual;

      return verificacaoMaiorIdade ? null : {'MaiorIdadeValidator': true}
  }
}
