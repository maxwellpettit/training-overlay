import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { TrainingOverlayRef } from '../training-overlay/training-overlay-ref';
import { TEMPLATE_DATA, TRAINING_DATA } from '../training-overlay/training-token';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent implements OnInit {

  templateRef: TemplateRef<any>;
  instructions: string;

  constructor(public dialogRef: TrainingOverlayRef,
    @Inject(TEMPLATE_DATA) public templateData,
    @Inject(TRAINING_DATA) public trainingData) { }

  ngOnInit() {
    // Display the component/templateRef passed into data
    this.templateRef = this.templateData;
    this.instructions = this.trainingData;
  }

}
