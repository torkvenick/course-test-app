import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective implements OnInit {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    public templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  ngOnInit() {}
}
