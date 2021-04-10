import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {FormsModule} from '@angular/forms';
import { CopyComponent } from './copy/copy.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, CopyComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [MainComponent],
})
export class MainModule {}
