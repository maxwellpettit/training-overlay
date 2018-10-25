import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Panel } from '../dashboard-panel/panel';
import { MatDialog } from '@angular/material/dialog';
import { TrainingDialogComponent } from '../training-dialog/training-dialog.component';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  panels: Panel[] = [
    { title: 'Panel 1', text: 'Panel 1 Text' },
    { title: 'Panel 2', text: 'Panel 2 Text' },
    { title: 'Panel 3', text: 'Panel 3 Text' },
    { title: 'Panel 4', text: 'Panel 4 Text' }
  ];

  title = 'Training Overlay';

  // Find the #trainingCard (i.e. the component to display in the dialog)
  @ViewChild('trainingCard') trainingCard: MatCard;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onTraining() {
    // Pass in trainingCard to the dialog
    console.log('Training Clicked');
    this.dialog.open(TrainingDialogComponent, {
      data: this.trainingCard
    });
  }

}
