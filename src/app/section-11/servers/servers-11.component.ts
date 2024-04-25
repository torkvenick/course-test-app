import { Component, OnInit } from '@angular/core';
import { Servers11Service } from './servers-11.service';

@Component({
  selector: 'app-servers-11',
  templateUrl: './servers-11.component.html',
  styleUrls: ['./servers-11.component.css'],
})
export class Servers11Component implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(private serversService: Servers11Service) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
