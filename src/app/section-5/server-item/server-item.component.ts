import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrl: './server-item.component.scss',
})
export class ServerItemComponent
  implements
    OnChanges,
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    DoCheck,
    OnDestroy
{
  @ViewChild('heading', { static: true }) heading: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  @Input() server: Server;
}
