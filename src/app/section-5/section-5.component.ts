import { Component } from '@angular/core';

@Component({
  selector: 'app-section-5',
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss',
})
export class Section5Component {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
