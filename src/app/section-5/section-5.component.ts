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
  // ===============ASSIGNMENT 5====================
  evenList = [];
  oddList = [];
  incrementingNumber = 0;
  interval;

  handleGameButtons(startMode: boolean) {
    if (startMode && !this.interval) {
      this.interval = setInterval(() => {
        this.incrementingNumber = ++this.incrementingNumber;
        this.incrementingNumber % 2 === 0
          ? this.evenList.push(this.incrementingNumber)
          : this.oddList.push(this.incrementingNumber);
      }, 500);
    } else if (!startMode && this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
