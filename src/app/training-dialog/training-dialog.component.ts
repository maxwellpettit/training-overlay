import { Component, OnInit, Inject, ViewChild, ComponentFactoryResolver, ViewContainerRef, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainingDirective } from '../training.directive';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.css']
})
export class TrainingDialogComponent implements OnInit {

  @ViewChild(TrainingDirective) host: TrainingDirective;

  constructor() { }

  ngOnInit() {
    // Display the component passed into the dialog data
  }

}
