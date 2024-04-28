import { Component, OnInit } from '@angular/core';

import { Servers11Service } from '../servers-11.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-server-11',
  templateUrl: './server-11.component.html',
  styleUrls: ['./server-11.component.css'],
})
export class Server11Component implements OnInit {
  server: { id: number; name: string; status: string };
  allowEdit: boolean;
  constructor(
    private serversService: Servers11Service,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.allowEdit = queryParams['allowEdit'] === 'true';
    });
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
