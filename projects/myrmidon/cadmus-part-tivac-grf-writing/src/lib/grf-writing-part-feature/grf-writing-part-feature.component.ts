import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  EditItemQuery,
  EditItemService,
  EditPartFeatureBase,
} from '@myrmidon/cadmus-state';

import { EditGrfWritingPartQuery } from './edit-grf-writing-part.query';
import { EditGrfWritingPartService } from './edit-grf-writing-part.service';

@Component({
  selector: 'cadmus-grf-writing-part-feature',
  templateUrl: './grf-writing-part-feature.component.html',
  styleUrls: ['./grf-writing-part-feature.component.css'],
})
export class GrfWritingPartFeatureComponent
  extends EditPartFeatureBase
  implements OnInit
{
  constructor(
    router: Router,
    route: ActivatedRoute,
    snackbar: MatSnackBar,
    editPartQuery: EditGrfWritingPartQuery,
    editPartService: EditGrfWritingPartService,
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
      'grf-writing-systems',
      'grf-writing-types',
      'grf-writing-languages',
      'grf-writing-techniques',
      'grf-writing-tools',
      'grf-writing-fig-types',
      'grf-writing-content-flags',
      'grf-writing-frame-types',
      'grf-writing-casings',
    ]);
  }
}
