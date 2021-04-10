import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NavigationComponent, HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, BrowserAnimationsModule],
})
export class HeaderModule {}
