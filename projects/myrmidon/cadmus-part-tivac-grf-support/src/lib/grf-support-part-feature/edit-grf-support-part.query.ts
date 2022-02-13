import { Injectable } from '@angular/core';
import { EditPartQueryBase } from '@myrmidon/cadmus-state';
import { EditGrfSupportPartStore } from './edit-grf-support-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfSupportPartQuery extends EditPartQueryBase {
  constructor(store: EditGrfSupportPartStore) {
    super(store);
  }
}
