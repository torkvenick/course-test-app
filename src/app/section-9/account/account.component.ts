import { Component, Input, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  loggingService = inject(LoggingService);
  accountsService = inject(AccountsService);
  onSetTo(status: string) {
    this.accountsService.changeStatus(this.id, status);
  }
}
