import { EventEmitter } from '@angular/core';

export interface ButtonModel {
  id: number;
  routeName: string;
  name: string;
}
export class GeneralService {
  pageUpdated = new EventEmitter<string>();

  buttons: ButtonModel[] = [
    { id: 1, routeName: 'section2', name: 'Section 2' },
    { id: 2, routeName: 'section5', name: 'Section 5' },
    { id: 3, routeName: 'section7', name: 'Section 7' },
    { id: 4, routeName: 'section9', name: 'Section 9' },
    { id: 5, routeName: 'section11', name: 'Section 11' },
  ];
}
