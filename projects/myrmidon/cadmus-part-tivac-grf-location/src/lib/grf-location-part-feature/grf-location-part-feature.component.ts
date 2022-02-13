import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  EditItemQuery,
  EditItemService,
  EditPartFeatureBase,
} from '@myrmidon/cadmus-state';
import { EditGrfLocationPartQuery } from './edit-grf-location-part.query';
import { EditGrfLocationPartService } from './edit-grf-location-part.service';

@Component({
  selector: 'cadmus-grf-location-part-feature',
  templateUrl: './grf-location-part-feature.component.html',
  styleUrls: ['./grf-location-part-feature.component.css'],
})
export class GrfLocationPartFeatureComponent
  extends EditPartFeatureBase
  implements OnInit
{
  constructor(
    router: Router,
    route: ActivatedRoute,
    snackbar: MatSnackBar,
    editPartQuery: EditGrfLocationPartQuery,
    editPartService: EditGrfLocationPartService,
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
    this.initEditor();
  }
}
