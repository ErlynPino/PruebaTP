import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbRouteTabsetModule, NbTabsetModule, NbLayoutModule, NbSidebarModule, NbCheckboxModule,NbButtonModule,NbCardModule,NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule
  ],
  exports: [
    NbRouteTabsetModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule
  ]
})
export class NebularModule { }
