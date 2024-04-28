import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-11',
  templateUrl: './home-11.component.html',
  styleUrls: ['./home-11.component.css'],
})
export class Home11Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    // this.router.navigate(['/servers']);
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: true },
      fragment: 'loading',
    });
  }
}
