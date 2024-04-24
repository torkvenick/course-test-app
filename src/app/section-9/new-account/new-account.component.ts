import { Component, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Account, AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.scss',
})
export class NewAccountComponent {
  loggingService = inject(LoggingService);
  accountsService = inject(AccountsService);
  onCreateAccount(accountName: string, accountStatus: string) {
    const account: Account = {
      name: accountName,
      status: accountStatus,
    };
    this.accountsService.addAccount(account);
  }
}
