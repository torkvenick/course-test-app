import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section2Component } from './section-2/section-2.component';
import { Section5Component } from './section-5/section-5.component';
import { Section7Component } from './section-7/section-7.component';
import { Section9Component } from './section-9/section-9.component';
import { Section11Component } from './section-11/section-11.component';

const appRoutes: Routes = [
  {
    path: 'section2',
    component: Section2Component,
  },
  {
    path: 'section5',
    component: Section5Component,
  },
  {
    path: 'section7',
    component: Section7Component,
  },
  {
    path: 'section9',
    component: Section9Component,
  },
  {
    path: 'section11',
    component: Section11Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
