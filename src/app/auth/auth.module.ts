import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterGuard } from '../router.guard';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', canActivate: [RouterGuard], component: AuthComponent },
    ]),
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
