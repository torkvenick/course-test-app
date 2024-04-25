import { Component, OnInit } from '@angular/core';

import { Servers11Service } from '../servers-11.service';

@Component({
  selector: 'app-server-11',
  templateUrl: './server-11.component.html',
  styleUrls: ['./server-11.component.css'],
})
export class Server11Component implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(private serversService: Servers11Service) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
}
