import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  EditItemQuery,
  EditItemService,
  EditPartFeatureBase,
} from '@myrmidon/cadmus-state';

import { EditGrfSupportPartQuery } from './edit-grf-support-part.query';
import { EditGrfSupportPartService } from './edit-grf-support-part.service';

@Component({
  selector: 'cadmus-grf-support-part-feature',
  templateUrl: './grf-support-part-feature.component.html',
  styleUrls: ['./grf-support-part-feature.component.css'],
})
export class GrfSupportPartFeatureComponent
  extends EditPartFeatureBase
  implements OnInit
{
  constructor(
    router: Router,
    route: ActivatedRoute,
    snackbar: MatSnackBar,
    editPartQuery: EditGrfSupportPartQuery,
    editPartService: EditGrfSupportPartService,
    editItemQuery: EditItemQuery,
    editItemService: EditItemService
  ) {
    super(
      router,
      route,
      snackbar,
      editPartQuery,
      editPartService,
      editItemQuery,
      editItemService
    );
  }

  public ngOnInit(): void {
    this.initEditor([
      'grf-support-functions',
      'grf-support-object-types',
      'grf-support-types',
      'grf-support-materials',
      'physical-size-units',
      'physical-size-tags',
      'physical-size-dim-tags',
    ]);
  }
}
