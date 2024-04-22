import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Section5Component } from './section-5/section-5.component';
import { CockpitComponent } from './section-5/cockpit/cockpit.component';
import { ServerItemComponent } from './section-5/server-item/server-item.component';
import { GameControlComponent } from './section-5/assignment/game-control/game-control.component';
import { OddComponent } from './section-5/assignment/odd/odd.component';
import { EvenComponent } from './section-5/assignment/even/even.component';
import { Section7Component } from './section-7/section-7.component';
import { BasicHighlightDirective } from './section-7/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './section-7/directives/better-highlight.directive';
import { UnlessDirective } from './section-7/directives/unless.directive';
import { Section9Component } from './section-9/section-9.component';
import { AccountComponent } from './section-9/account/account.component';
import { NewAccountComponent } from './section-9/new-account/new-account.component';
import { LoggingService } from './section-9/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    Section5Component,
    CockpitComponent,
    ServerItemComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Section7Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    Section9Component,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
