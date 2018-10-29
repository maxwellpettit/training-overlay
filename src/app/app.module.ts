import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingOverlayService } from './training-overlay/training-overlay.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    OverlayModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPanelComponent,
    TrainingDialogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    TrainingOverlayService,

  ],
  entryComponents: [TrainingDialogComponent]
})
export class AppModule { }
