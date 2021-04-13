import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {FormsModule} from '@angular/forms';
import { CopyComponent } from './copy/copy.component';
import {SharedModule} from '../shared/shared.module';
import { ShortenPipePipe } from './copy/shorten-pipe.pipe';

@NgModule({
  declarations: [MainComponent, CopyComponent, ShortenPipePipe],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [MainComponent],
})
export class MainModule {}
