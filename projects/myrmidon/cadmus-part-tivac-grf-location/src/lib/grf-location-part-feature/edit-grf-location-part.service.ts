import { Injectable } from '@angular/core';
import { ItemService, ThesaurusService } from '@myrmidon/cadmus-api';
import { EditPartServiceBase } from '@myrmidon/cadmus-state';
import { EditGrfLocationPartStore } from './edit-grf-location-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfLocationPartService extends EditPartServiceBase {
  constructor(
    editPartStore: EditGrfLocationPartStore,
    itemService: ItemService,
    thesaurusService: ThesaurusService
  ) {
    super(itemService, thesaurusService);
    this.store = editPartStore;
  }
}
