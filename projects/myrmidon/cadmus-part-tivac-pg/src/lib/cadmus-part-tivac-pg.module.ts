import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';

import {
  GrfLocationPartFeatureComponent,
  GRF_LOCATION_PART_TYPEID,
} from '@myrmidon/cadmus-part-tivac-grf-location';
import {
  GrfSupportPartFeatureComponent,
  GRF_SUPPORT_PART_TYPEID,
} from '@myrmidon/cadmus-part-tivac-grf-support';
import {
  GrfWritingPartFeatureComponent,
  GRF_WRITING_PART_TYPEID,
} from '@myrmidon/cadmus-part-tivac-grf-writing';

// https://github.com/ng-packagr/ng-packagr/issues/778
export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${GRF_LOCATION_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: GrfLocationPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: `${GRF_SUPPORT_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: GrfSupportPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: `${GRF_WRITING_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: GrfWritingPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Cadmus
    RouterModuleForChild,
    CadmusCoreModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
  ],
  exports: [],
})
export class CadmusPartTivacPgModule {}
