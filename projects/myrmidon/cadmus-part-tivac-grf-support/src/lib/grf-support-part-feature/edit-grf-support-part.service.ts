import { Injectable } from '@angular/core';
import { ItemService, ThesaurusService } from '@myrmidon/cadmus-api';
import { EditPartServiceBase } from '@myrmidon/cadmus-state';

import { EditGrfSupportPartStore } from './edit-grf-support-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfSupportPartService extends EditPartServiceBase {
  constructor(
    editPartStore: EditGrfSupportPartStore,
    itemService: ItemService,
    thesaurusService: ThesaurusService
  ) {
    super(itemService, thesaurusService);
    this.store = editPartStore;
  }
}
