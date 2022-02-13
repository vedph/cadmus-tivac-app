import { Injectable } from '@angular/core';
import { EditPartQueryBase } from '@myrmidon/cadmus-state';
import { EditGrfLocationPartStore } from './edit-grf-location-part.store';

@Injectable({ providedIn: 'root' })
export class EditGrfLocationPartQuery extends EditPartQueryBase {
  constructor(store: EditGrfLocationPartStore) {
    super(store);
  }
}
