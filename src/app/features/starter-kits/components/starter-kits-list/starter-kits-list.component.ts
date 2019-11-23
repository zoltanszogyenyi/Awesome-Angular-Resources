import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Resource } from '../../../../shared/models/resource.model';
import { RESOURCES } from '../../../../shared/data/resources.data';

@Component({
  selector: 'app-starter-kits-list',
  templateUrl: './starter-kits-list.component.html',
  styleUrls: ['./starter-kits-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarterKitsListComponent {
  readonly TYPE_ALL = 'all';
  readonly TYPE_FRAMEWORK = 'framework';
  readonly TYPE_LIB = 'lib';
  readonly TYPE_TOOL = 'tool';
  readonly TYPE_STARTER = 'starter';
  readonly TYPE_PODCAST = 'podcast';
  readonly TYPE_COMMUNITY = 'community';
  readonly TYPE_OTHER = 'other';

  selectedTab$ = this.TYPE_ALL;

  resources$: Resource[];
  queryString = '';

  constructor() {
    this.resources$ = RESOURCES;
  }

  filterHandler(type: string): void {
    this.selectedTab$ = type;
    const data = RESOURCES;

    if (type === 'all') {
      this.resources$ = data;
      return;
    }

    this.resources$ = data.filter(item => item.type === type);
    return;
  }

  redirect(link: string): false {
    window.open(link, '_blank');
    return false;
  }

  trackByFn(index, item): number {
    return item.id;
  }
}
