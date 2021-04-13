import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    MainModule,
    FooterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
