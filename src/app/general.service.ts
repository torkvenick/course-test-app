import { EventEmitter } from '@angular/core';

export class GeneralService {
  pageUpdated = new EventEmitter<string>();
}
