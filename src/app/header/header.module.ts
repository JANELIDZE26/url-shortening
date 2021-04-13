import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BackdropComponent } from './backdrop/backdrop.component';
import { MobileNavigationComponent } from './navigation/mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './navigation/desktop-navigation/desktop-navigation.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BackdropComponent,
    MobileNavigationComponent,
    DesktopNavigationComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, BrowserAnimationsModule, AppRoutingModule],
})
export class HeaderModule {}
