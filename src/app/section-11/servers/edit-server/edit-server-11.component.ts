import { Component, OnInit } from '@angular/core';

import { Servers11Service } from '../servers-11.service';

@Component({
  selector: 'app-edit-server-11',
  templateUrl: './edit-server-11.component.html',
  styleUrls: ['./edit-server-11.component.css'],
})
export class EditServer11Component implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: Servers11Service) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
