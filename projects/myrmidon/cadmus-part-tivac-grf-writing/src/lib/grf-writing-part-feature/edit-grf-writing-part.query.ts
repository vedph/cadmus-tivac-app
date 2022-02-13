import { Injectable } from '@angular/core';
import { EditPartQueryBase } from '@myrmidon/cadmus-state';

import { EditGrfWritingPartStore } from './edit-grf-writing-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfWritingPartQuery extends EditPartQueryBase {
  constructor(store: EditGrfWritingPartStore) {
    super(store);
  }
}
