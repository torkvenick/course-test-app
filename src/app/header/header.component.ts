import { Component, inject } from '@angular/core';
import { ButtonModel, GeneralService } from '../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  gService = inject(GeneralService);
  constructor(private router: Router) {}
  onSelect(btn: ButtonModel) {
    console.log(btn);
    this.router.navigate([btn.routeName]);
  }

  buttons = this.gService.buttons;
}
