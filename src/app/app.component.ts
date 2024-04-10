import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  serverName: string = '';

  servers = [
    {
      name: 'localhost',
      serverStatus: this.checkStatus()
    },
    {
      name: 'google.com',
      serverStatus: this.checkStatus()
    },
  ]

  createServer() {
    this.servers.push({
      name: this.serverName,
      serverStatus: this.checkStatus()
    });
    this.serverName = '';
  }

  deleteServer(server: string) {
    const serverToDeleteIndex = this.servers.findIndex(ser => ser.name === server);
    this.servers.splice(serverToDeleteIndex, 1);
  }

  checkStatus() {
    return Math.random() > 0.5? 'offline' : 'online';
  }
  
  setBg(serverStatus) {
    return serverStatus === 'online'? 'lightgreen' : 'lightyellow';
  }

  changeStatus() {
    this.servers.forEach(server => server.serverStatus = this.checkStatus());
  }
  // =================ASSIGNMENT SECTION 2========================== 
  blocks = [];
  detailShowed = false;

  showDetails() {
    this.detailShowed = !this.detailShowed;
    this.blocks.push(this.blocks.length + 1)
  }

  setBgd(idx) {
    return idx > 4 ? 'blue' : ''; 
  }
}