import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { TrainingOverlayRef } from '../training-overlay/training-overlay-ref';
import { CONTAINER_DATA } from '../training-overlay/training-token';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent implements OnInit {

  templateRef: TemplateRef<any>;

  constructor(public dialogRef: TrainingOverlayRef, @Inject(CONTAINER_DATA) public data) { }

  ngOnInit() {
    // Display the component/templateRef passed into data
    this.templateRef = this.data;
  }

}
