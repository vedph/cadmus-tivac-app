import { Injectable } from '@angular/core';
import { ItemService, ThesaurusService } from '@myrmidon/cadmus-api';
import { EditPartServiceBase } from '@myrmidon/cadmus-state';

import { EditGrfWritingPartStore } from './edit-grf-writing-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfWritingPartService extends EditPartServiceBase {
  constructor(
    editPartStore: EditGrfWritingPartStore,
    itemService: ItemService,
    thesaurusService: ThesaurusService
  ) {
    super(itemService, thesaurusService);
    this.store = editPartStore;
  }
}
