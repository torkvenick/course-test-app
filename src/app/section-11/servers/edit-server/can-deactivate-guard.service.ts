import { Observable } from 'rxjs';

export interface CanCompDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard {
  canDeactivate(component: CanCompDeactivate) {
    return component.canDeactivate();
  }
}
