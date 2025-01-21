import { Directive } from '@angular/core';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[validatorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidarCepDirective,
    multi: true
  }],
  standalone: true
})
export class ValidarCepDirective implements Validator {

  constructor(private service: ConsultaCepService) { }

  validate(control: AbstractControl): ValidationErrors | null {
      const cep = control.value;

      return this.service.getConsultarCep(cep).pipe(map(
      (response: any) => response.erro ? {'validatorCep': true} : null
      ));
  }
}
