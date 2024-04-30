import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Serv, Servers11Service } from '../servers-11.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerResolver {
  constructor(private serversService: Servers11Service) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Serv> | Promise<Serv> | Serv {
    return this.serversService.getServer(+route.params['id']);
  }
}
