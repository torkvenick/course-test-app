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
import { AccountsService } from './section-9/accounts.service';
import { UsersComponent } from './section-9/assignment/users/users.component';
import { ActiveUsersComponent } from './section-9/assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './section-9/assignment/inactive-users/inactive-users.component';
import { CounterService } from './section-9/assignment/services/counter.service';
import { HeaderComponent } from './header/header.component';
import { GeneralService } from './general.service';
import { Section2Component } from './section-2/section-2.component';
import { AppRoutingModule } from './app-routing.module';
import { Section11Module } from './section-11/section-11.module';

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
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HeaderComponent,
    Section2Component,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, Section11Module],
  providers: [LoggingService, AccountsService, CounterService, GeneralService],
  bootstrap: [AppComponent],
})
export class AppModule {}
