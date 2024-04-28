import { Component, OnInit } from '@angular/core';
import { Servers11Service } from './servers-11.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers-11',
  templateUrl: './servers-11.component.html',
  styleUrls: ['./servers-11.component.css'],
})
export class Servers11Component implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: Servers11Service,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }
}
