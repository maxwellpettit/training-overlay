import { Component, OnInit, ViewChild, ComponentFactoryResolver, Injector, Inject } from '@angular/core';
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

  constructor(private dialog: MatDialog, private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  onTraining() {
    console.log('Training Clicked');

    const screenFactory = this.resolver.resolveComponentFactory(MatCard);
    const screenViewRef = screenFactory.create(this.injector);

    const dialogScreenFactory = this.resolver.resolveComponentFactory(TrainingDialogComponent);
    const contentSelectors = dialogScreenFactory.ngContentSelectors;
    const ngContent = contentSelectors.map(selector => [screenViewRef.location.nativeElement.querySelector(selector)]);

    console.log(ngContent);
  }

}
