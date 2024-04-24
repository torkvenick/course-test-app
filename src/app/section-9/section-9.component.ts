import { Component, inject } from '@angular/core';
import { Account, AccountsService } from './accounts.service';

@Component({
  selector: 'app-section-9',
  templateUrl: './section-9.component.html',
  styleUrl: './section-9.component.scss',
})
export class Section9Component {
  accountsService = inject(AccountsService);
  accounts: Account[] = this.accountsService.pubAccounts;
}
