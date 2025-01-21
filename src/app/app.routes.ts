import { Routes } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { SucessoComponent } from './components/pages/sucesso/sucesso.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastro',
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'sucesso',
    component: SucessoComponent
  },
];
