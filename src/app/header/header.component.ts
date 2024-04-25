import { Component, inject } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  gService = inject(GeneralService);
  onSelect(page: string) {
    this.gService.pageUpdated.emit(page);
  }
}
