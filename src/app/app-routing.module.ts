import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthComponent } from './auth/auth.component';
import {RouterGuard} from './router.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: MainComponent },
        {
          path: 'sign-up',
          data: { authMethod: 'signUp' },
          loadChildren: () =>
            import('./auth/auth.module').then((module) => module.AuthModule),
        },
        {
          path: 'login',
          data: { authMethod: 'login' },
          loadChildren: () =>
            import('./auth/auth.module').then((module) => module.AuthModule),
        },
        { path: '**', redirectTo: '' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
