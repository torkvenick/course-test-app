import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  page = 'next';

  constructor(private gService: GeneralService) {}

  ngOnInit(): void {
    this.gService.pageUpdated.subscribe((page) => (this.page = page));
  }
}
