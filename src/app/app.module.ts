import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Section5Component } from './section-5/section-5.component';
import { CockpitComponent } from './section-5/cockpit/cockpit.component';
import { ServerItemComponent } from './section-5/server-item/server-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Section5Component,
    CockpitComponent,
    ServerItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
