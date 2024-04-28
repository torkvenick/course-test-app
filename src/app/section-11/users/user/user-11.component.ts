import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-11',
  templateUrl: './user-11.component.html',
  styleUrls: ['./user-11.component.css'],
})
export class User11Component implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe(
      (params: Params) =>
        (this.user = {
          id: params.id,
          name: params['name'],
        })
    );
  }
}
