import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BackdropComponent } from './backdrop/backdrop.component';
import { MobileNavigationComponent } from './navigation/mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './navigation/desktop-navigation/desktop-navigation.component';

@NgModule({
  declarations: [HeaderComponent, BackdropComponent, MobileNavigationComponent, DesktopNavigationComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, BrowserAnimationsModule],
})
export class HeaderModule {}
