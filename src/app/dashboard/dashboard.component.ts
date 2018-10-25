import { Component, OnInit, ViewChild, ComponentFactoryResolver, Injector, Inject, ComponentRef, ElementRef } from '@angular/core';
import { Panel } from '../dashboard-panel/panel';
import { MatDialog } from '@angular/material/dialog';
import { TrainingDialogComponent } from '../training-dialog/training-dialog.component';
import { MatCard } from '@angular/material';
import { DOCUMENT } from '@angular/common';


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

  @ViewChild('trainingCard', {read: ElementRef}) trainingCard: ElementRef;

  constructor(private dialog: MatDialog, private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  onTraining() {
    console.log('Training Clicked');
    const dialogScreenFactory = this.resolver.resolveComponentFactory(TrainingDialogComponent);
    const contentSelectors = dialogScreenFactory.ngContentSelectors;
    const ngContent = contentSelectors.map(selector => [this.trainingCard.nativeElement.querySelector(selector)]);

    for (const row of ngContent) {
      for (const col of row) {
        console.log(col);
      }
    }

    const dialogRef = dialogScreenFactory.create(this.injector, ngContent);

    // this.dialog.open(dialogRef);

  }

}
