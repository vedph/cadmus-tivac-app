import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { deepCopy } from '@myrmidon/ng-tools';
import { AuthJwtService } from '@myrmidon/auth-jwt-login';
import { ModelEditorComponentBase } from '@myrmidon/cadmus-ui';
import { ThesaurusEntry } from '@myrmidon/cadmus-core';

import { GrfWritingPart, GRF_WRITING_PART_TYPEID } from '../grf-writing-part';
import { Flag } from '@myrmidon/cadmus-ui-flags-picker';

/**
 * GrfWriting part editor component.
 * Thesauri: grf-writing-systems, grf-writing-types, grf-writing-languages,
 * grf-writing-techniques, grf-writing-tools, grf-writing-fig-types,
 * grf-writing-content-flags, grf-writing-frame-types, grf-writing-casings.
 */
@Component({
  selector: 'cadmus-grf-writing-part',
  templateUrl: './grf-writing-part.component.html',
  styleUrls: ['./grf-writing-part.component.css'],
})
export class GrfWritingPartComponent
  extends ModelEditorComponentBase<GrfWritingPart>
  implements OnInit
{
  public system: FormControl;
  public type: FormControl;
  public language: FormControl;
  public isPoetic: FormControl;
  public technique: FormControl;
  public tool: FormControl;
  public figType: FormControl;
  public contentFeatures: FormControl;
  public frameType: FormControl;
  public casing: FormControl;
  public rowCount: FormControl;

  public featFlags: Flag[];
  public initialFeatures: string[];

  // grf-writing-systems
  public sysEntries: ThesaurusEntry[] | undefined;
  // grf-writing-types
  public typeEntries: ThesaurusEntry[] | undefined;
  // grf-writing-languages
  public lngEntries: ThesaurusEntry[] | undefined;
  // grf-writing-techniques
  public techEntries: ThesaurusEntry[] | undefined;
  // grf-writing-tools
  public toolEntries: ThesaurusEntry[] | undefined;
  // grf-writing-fig-types
  public figTypeEntries: ThesaurusEntry[] | undefined;
  // grf-writing-content-flags
  public flagEntries: ThesaurusEntry[] | undefined;
  // grf-writing-frame-types
  public frameEntries: ThesaurusEntry[] | undefined;
  // grf-writing-casings
  public casEntries: ThesaurusEntry[] | undefined;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService);
    this.featFlags = [];
    this.initialFeatures = [];
    // form
    this.system = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.type = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.language = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.isPoetic = formBuilder.control(false);
    this.technique = formBuilder.control(null, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.tool = formBuilder.control(null, Validators.maxLength(50));
    this.figType = formBuilder.control(null, Validators.maxLength(50));
    this.contentFeatures = formBuilder.control([]);
    this.frameType = formBuilder.control(null, Validators.maxLength(50));
    this.casing = formBuilder.control(null, Validators.maxLength(50));
    this.rowCount = formBuilder.control(0);
    this.form = formBuilder.group({
      system: this.system,
      type: this.type,
      language: this.language,
      isPoetic: this.isPoetic,
      technique: this.technique,
      tool: this.tool,
      figType: this.figType,
      contentFeatures: this.contentFeatures,
      frameType: this.frameType,
      casing: this.casing,
      rowCount: this.rowCount,
    });
  }

  public ngOnInit(): void {
    this.initEditor();
  }

  private updateForm(model: GrfWritingPart): void {
    if (!model) {
      this.form!.reset();
      return;
    }
    this.system.setValue(model.system);
    this.type.setValue(model.type);
    this.language.setValue(model.language);
    this.isPoetic.setValue(model.isPoetic || false);
    this.technique.setValue(model.technique);
    this.tool.setValue(model.tool);
    this.figType.setValue(model.figType);
    this.initialFeatures = model.contentFeatures || [];
    this.frameType.setValue(model.frameType);
    this.casing.setValue(model.casing);
    this.rowCount.setValue(model.rowCount);
    this.form!.markAsPristine();
  }

  protected onModelSet(model: GrfWritingPart): void {
    this.updateForm(deepCopy(model));
  }

  protected override onThesauriSet(): void {
    let key = 'grf-writing-systems';
    if (this.thesauri && this.thesauri[key]) {
      this.sysEntries = this.thesauri[key].entries;
    } else {
      this.sysEntries = undefined;
    }
    key = 'grf-writing-types';
    if (this.thesauri && this.thesauri[key]) {
      this.typeEntries = this.thesauri[key].entries;
    } else {
      this.typeEntries = undefined;
    }
    key = 'grf-writing-languages';
    if (this.thesauri && this.thesauri[key]) {
      this.lngEntries = this.thesauri[key].entries;
    } else {
      this.lngEntries = undefined;
    }
    key = 'grf-writing-techniques';
    if (this.thesauri && this.thesauri[key]) {
      this.techEntries = this.thesauri[key].entries;
    } else {
      this.techEntries = undefined;
    }
    key = 'grf-writing-tools';
    if (this.thesauri && this.thesauri[key]) {
      this.toolEntries = this.thesauri[key].entries;
    } else {
      this.toolEntries = undefined;
    }
    key = 'grf-writing-fig-types';
    if (this.thesauri && this.thesauri[key]) {
      this.figTypeEntries = this.thesauri[key].entries;
    } else {
      this.figTypeEntries = undefined;
    }
    key = 'grf-writing-content-flags';
    if (this.thesauri && this.thesauri[key]) {
      this.flagEntries = this.thesauri[key].entries;
      this.featFlags = this.flagEntries!.map((e) => {
        return {
          id: e.id,
          label: e.value,
        } as Flag;
      });
    } else {
      this.flagEntries = undefined;
      this.featFlags = [];
    }
    key = 'grf-writing-frame-types';
    if (this.thesauri && this.thesauri[key]) {
      this.frameEntries = this.thesauri[key].entries;
    } else {
      this.frameEntries = undefined;
    }
    key = 'grf-writing-casings';
    if (this.thesauri && this.thesauri[key]) {
      this.casEntries = this.thesauri[key].entries;
    } else {
      this.casEntries = undefined;
    }
  }

  public onSelectedIdsChange(ids: string[]): void {
    this.contentFeatures.setValue(ids);
  }

  protected getModelFromForm(): GrfWritingPart {
    let part = this.model;
    if (!part) {
      part = {
        itemId: this.itemId || '',
        id: '',
        typeId: GRF_WRITING_PART_TYPEID,
        roleId: this.roleId,
        timeCreated: new Date(),
        creatorId: '',
        timeModified: new Date(),
        userId: '',
        system: '',
        type: '',
        language: '',
        isPoetic: false,
        technique: '',
        rowCount: 0,
      };
    }
    part.system = this.system.value?.trim();
    part.type = this.type.value?.trim();
    part.language = this.language.value?.trim();
    part.isPoetic = this.isPoetic.value ? true : false;
    part.technique = this.technique.value?.trim();
    part.tool = this.tool.value?.trim();
    part.figType = this.figType.value?.trim();
    part.contentFeatures = this.contentFeatures.value?.length
      ? this.contentFeatures.value
      : undefined;
    part.frameType = this.frameType.value?.trim();
    part.casing = this.casing.value?.trim();
    part.rowCount = this.rowCount.value ? +this.rowCount : 0;
    return part;
  }
}
