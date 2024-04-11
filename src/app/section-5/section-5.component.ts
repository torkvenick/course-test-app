import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-section-5',
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss',
})
export class Section5Component {
  serverElements = [];

  onAddServer(server: Server) {
    this.serverElements.push(server);
  }
}
