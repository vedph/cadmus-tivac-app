import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { deepCopy } from '@myrmidon/ng-tools';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';
import { ModelEditorComponentBase } from '@myrmidon/cadmus-ui';
import { ThesaurusEntry } from '@myrmidon/cadmus-core';

import { GrfSupportPart, GRF_SUPPORT_PART_TYPEID } from '../grf-support-part';
import { PhysicalSize } from '@myrmidon/cadmus-mat-physical-size';

/**
 * GrfSupport part editor component.
 * Thesauri: grf-support-functions, grf-support-object-types, grf-support-types,
 * grf-support-materials, physical-size-units, physical-size-tags,
 * physical-size-dim-tags (all optional).
 */
@Component({
  selector: 'cadmus-grf-support-part',
  templateUrl: './grf-support-part.component.html',
  styleUrls: ['./grf-support-part.component.css'],
})
export class GrfSupportPartComponent
  extends ModelEditorComponentBase<GrfSupportPart>
  implements OnInit
{
  public originalFn: FormControl;
  public currentFn: FormControl;
  public objectType: FormControl;
  public supportType: FormControl;
  public isIndoor: FormControl;
  public material: FormControl;
  public size: FormControl;
  public state: FormControl;
  public lastViewed: FormControl;

  public initialSize?: PhysicalSize;

  // grf-support-functions
  public fnEntries: ThesaurusEntry[] | undefined;
  // grf-support-object-types
  public objTypeEntries: ThesaurusEntry[] | undefined;
  // grf-support-types
  public supTypeEntries: ThesaurusEntry[] | undefined;
  // grf-support-materials
  public supMatEntries: ThesaurusEntry[] | undefined;
  // size:
  // physical-size-units
  public szUnitEntries: ThesaurusEntry[] | undefined;
  // physical-size-tags
  public szTagEntries: ThesaurusEntry[] | undefined;
  // physical-size-dim-tags
  public szDimTagEntries: ThesaurusEntry[] | undefined;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService);
    // form
    this.originalFn = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.currentFn = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.objectType = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.supportType = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.isIndoor = formBuilder.control(false);
    this.material = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.size = formBuilder.control(null, Validators.required);
    this.state = formBuilder.control(null, Validators.maxLength(1000));
    this.lastViewed = formBuilder.control(new Date(), Validators.required);
    this.form = formBuilder.group({
      originalFn: this.originalFn,
      currentFn: this.currentFn,
      objectType: this.objectType,
      supportType: this.supportType,
      isIndoor: this.isIndoor,
      material: this.material,
      size: this.size,
      state: this.state,
      lastViewed: this.lastViewed,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: GrfSupportPart): void {
    if (!model) {
      this.form!.reset();
      return;
    }
    this.originalFn.setValue(model.originalFn);
    this.currentFn.setValue(model.currentFn);
    this.objectType.setValue(model.objectType);
    this.supportType.setValue(model.supportType);
    this.isIndoor.setValue(model.isIndoor);
    this.material.setValue(model.material);
    this.initialSize = model.size;
    this.state.setValue(model.state);
    this.lastViewed.setValue(model.lastViewed);
    this.form!.markAsPristine();
  }

  protected onModelSet(model: GrfSupportPart): void {
    this.updateForm(deepCopy(model));
  }

  protected override onThesauriSet(): void {
    let key = 'grf-support-functions';
    if (this.thesauri && this.thesauri[key]) {
      this.fnEntries = this.thesauri[key].entries;
    } else {
      this.fnEntries = undefined;
    }
    key = 'grf-support-object-types';
    if (this.thesauri && this.thesauri[key]) {
      this.objTypeEntries = this.thesauri[key].entries;
    } else {
      this.objTypeEntries = undefined;
    }
    key = 'grf-support-types';
    if (this.thesauri && this.thesauri[key]) {
      this.supTypeEntries = this.thesauri[key].entries;
    } else {
      this.supTypeEntries = undefined;
    }
    key = 'grf-support-materials';
    if (this.thesauri && this.thesauri[key]) {
      this.supMatEntries = this.thesauri[key].entries;
    } else {
      this.supMatEntries = undefined;
    }
    key = 'physical-size-units';
    if (this.thesauri && this.thesauri[key]) {
      this.szUnitEntries = this.thesauri[key].entries;
    } else {
      this.szUnitEntries = undefined;
    }
    key = 'physical-size-tags';
    if (this.thesauri && this.thesauri[key]) {
      this.szTagEntries = this.thesauri[key].entries;
    } else {
      this.szTagEntries = undefined;
    }
    key = 'physical-size-dim-tags';
    if (this.thesauri && this.thesauri[key]) {
      this.szDimTagEntries = this.thesauri[key].entries;
    } else {
      this.szDimTagEntries = undefined;
    }
  }

  public onSizeChange(size: PhysicalSize): void {
    this.size.setValue(size);
  }

  protected getModelFromForm(): GrfSupportPart {
    let part = this.model;
    if (!part) {
      part = {
        itemId: this.itemId || '',
        id: '',
        typeId: GRF_SUPPORT_PART_TYPEID,
        roleId: this.roleId,
        timeCreated: new Date(),
        creatorId: '',
        timeModified: new Date(),
        userId: '',
        originalFn: '',
        currentFn: '',
        objectType: '',
        supportType: '',
        isIndoor: false,
        material: '',
        size: {},
        lastViewed: new Date(),
      };
    }
    part.originalFn = this.originalFn.value?.trim();
    part.currentFn = this.currentFn.value?.trim();
    part.objectType = this.objectType.value?.trim();
    part.supportType = this.supportType.value?.trim();
    part.isIndoor = this.isIndoor.value || false;
    part.material = this.material.value?.trim();
    part.size = this.size.value;
    part.state = this.state.value?.trim();
    part.lastViewed = this.lastViewed.value?.trim();
    return part;
  }
}
