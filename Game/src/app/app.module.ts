import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BlockgrowComponent } from './components/blockgrow/blockgrow.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    BannerComponent,
    TopbarComponent,
    BlockgrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
