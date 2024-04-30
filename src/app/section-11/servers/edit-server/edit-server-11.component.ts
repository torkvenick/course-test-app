import { Component, OnInit } from '@angular/core';

import { Servers11Service } from '../servers-11.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanCompDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server-11',
  templateUrl: './edit-server-11.component.html',
  styleUrls: ['./edit-server-11.component.css'],
})
export class EditServer11Component implements OnInit, CanCompDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: Servers11Service,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params.id);
      if (this.server) {
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.allowEdit = queryParams['allowEdit'] === 'true';
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Are you sure you want to leave?');
    } else {
      return true;
    }
  }
}
