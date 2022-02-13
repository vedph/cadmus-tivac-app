import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { deepCopy } from '@myrmidon/ng-tools';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';
import { ModelEditorComponentBase } from '@myrmidon/cadmus-ui';

import {
  GrfLocationPart,
  GRF_LOCATION_PART_TYPEID,
} from '../grf-location-part';

/**
 * GrfLocation part editor component.
 * Thesauri: none.
 */
@Component({
  selector: 'cadmus-grf-location-part',
  templateUrl: './grf-location-part.component.html',
  styleUrls: ['./grf-location-part.component.css'],
})
export class GrfLocationPartComponent
  extends ModelEditorComponentBase<GrfLocationPart>
  implements OnInit
{
  public place: FormControl;
  public area: FormControl;
  public district: FormControl;
  public location: FormControl;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService);
    // form
    this.place = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.area = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.district = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.location = formBuilder.control(null, Validators.maxLength(100));
    this.form = formBuilder.group({
      place: this.place,
      area: this.area,
      district: this.district,
      location: this.location,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: GrfLocationPart): void {
    if (!model) {
      this.form!.reset();
      return;
    }
    this.place.setValue(model.place);
    this.area.setValue(model.area);
    this.district.setValue(model.district);
    this.location.setValue(model.location);
    this.form!.markAsPristine();
  }

  protected onModelSet(model: GrfLocationPart): void {
    this.updateForm(deepCopy(model));
  }

  protected getModelFromForm(): GrfLocationPart {
    let part = this.model;
    if (!part) {
      part = {
        itemId: this.itemId || '',
        id: '',
        typeId: GRF_LOCATION_PART_TYPEID,
        roleId: this.roleId,
        timeCreated: new Date(),
        creatorId: '',
        timeModified: new Date(),
        userId: '',
        place: '',
        area: '',
        district: '',
      };
    }
    part.place = this.place.value?.trim();
    part.area = this.area.value?.trim();
    part.district = this.district.value?.trim();
    part.location = this.location.value?.trim();
    return part;
  }
}
