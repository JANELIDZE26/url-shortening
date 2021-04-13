import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: MainComponent },
        {
          path: 'sign-up',
          component: AuthComponent,
          data: { authMethod: 'signUp' },
        },
        {
          path: 'login',
          component: AuthComponent,
          data: { authMethod: 'login' },
        },
        { path: '**', redirectTo: '' },
      ],
      {
        scrollPositionRestoration: 'enabled',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
