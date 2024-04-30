import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditServer11Component } from './servers/edit-server/edit-server-11.component';
import { Server11Component } from './servers/server/server-11.component';
import { Servers11Component } from './servers/servers-11.component';
import { User11Component } from './users/user/user-11.component';
import { Users11Component } from './users/users-11.component';
import { Section11Component } from './section-11.component';
import { Home11Component } from './home/home-11.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: Section11Component,
    children: [
      { path: 'home', component: Home11Component },
      {
        path: 'users',
        component: Users11Component,
        children: [{ path: ':id/:name', component: User11Component }],
      },
      {
        path: 'servers',
        component: Servers11Component,
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {
            path: ':id',
            component: Server11Component,
            resolve: { server: ServerResolver },
          },
          {
            path: ':id/edit',
            component: EditServer11Component,
            canDeactivate: [CanDeactivateGuard],
          },
        ],
      },
      {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' },
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    CommonModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class Section11RoutingModule {}
