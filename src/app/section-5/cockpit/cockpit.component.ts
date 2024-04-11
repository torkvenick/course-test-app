import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.scss',
})
export class CockpitComponent {
  @Output() onServerAdded = new EventEmitter<Server>();
  @ViewChild('serverName', { static: true }) serverName: ElementRef;
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;

  newServerName = '';
  newServerContent = '';

  onAddServer(serverName: string) {
    const newServer: Server = {
      type: 'server',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    };
    this.onServerAdded.emit(newServer);
  }

  onAddBlueprint(serverContent: string) {
    const newServer: Server = {
      type: 'blueprint',
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    };
    this.onServerAdded.emit(newServer);
  }
}
