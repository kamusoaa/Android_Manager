import { RouterModule, Routes} from '@angular/router';
import { LogoComponent} from './login/logo/logo.component';

const routes: Routes = [
  {path: '', component: LogoComponent}
];

export const routinng = RouterModule.forRoot(routes);
