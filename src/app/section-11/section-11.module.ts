import { NgModule } from '@angular/core';
import { Home11Component } from './home/home-11.component';
import { Section11Component } from './section-11.component';
import { EditServer11Component } from './servers/edit-server/edit-server-11.component';
import { Server11Component } from './servers/server/server-11.component';
import { Servers11Component } from './servers/servers-11.component';
import { User11Component } from './users/user/user-11.component';
import { Users11Component } from './users/users-11.component';
import { Servers11Service } from './servers/servers-11.service';
import { Section11RoutingModule } from './section-11-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Section11Component,
    Home11Component,
    Users11Component,
    User11Component,
    Servers11Component,
    Server11Component,
    EditServer11Component,
  ],
  exports: [
    Section11Component,
    Home11Component,
    Users11Component,
    User11Component,
    Servers11Component,
    Server11Component,
    EditServer11Component,
  ],
  providers: [Servers11Service],
  imports: [FormsModule, CommonModule, Section11RoutingModule],
})
export class Section11Module {}
