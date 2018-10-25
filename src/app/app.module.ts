import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule, MatCard } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingDirective } from './training.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPanelComponent,
    TrainingDialogComponent,
    TrainingDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [TrainingDialogComponent, MatCard]
})
export class AppModule { }
