import { Component, OnInit } from '@angular/core';

import { Servers11Service } from '../servers-11.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server-11',
  templateUrl: './edit-server-11.component.html',
  styleUrls: ['./edit-server-11.component.css'],
})
export class EditServer11Component implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: Servers11Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params.id);
      if (this.server) {
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
