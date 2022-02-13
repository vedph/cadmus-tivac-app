import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { EditPartState, EditPartStoreApi } from '@myrmidon/cadmus-state';

import { GRF_SUPPORT_PART_TYPEID } from '../grf-support-part';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: GRF_SUPPORT_PART_TYPEID })
export class EditGrfSupportPartStore
  extends Store<EditPartState>
  implements EditPartStoreApi
{
  constructor() {
    super({});
  }

  public setDirty(value: boolean): void {
    this.update({ dirty: value });
  }
  public setSaving(value: boolean): void {
    this.update({ saving: value });
  }
}
