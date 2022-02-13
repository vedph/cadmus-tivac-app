import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadmusCoreModule } from '@myrmidon/cadmus-core';
import { RouterModuleForChild } from '@myrmidon/cadmus-item-list';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';

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
