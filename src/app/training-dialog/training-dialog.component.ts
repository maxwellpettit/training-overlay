import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { TrainingOverlayRef } from '../training-overlay/training-overlay-ref';
import { TEMPLATE_DATA, INSTRUCTIONS_DATA } from '../training-overlay/training-token';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent implements OnInit {

  templateMap: Map<string, TemplateRef<any>>;
  instructionsMap: Map<string, string>;

  constructor(public dialogRef: TrainingOverlayRef,
    @Inject(TEMPLATE_DATA) public templateData,
    @Inject(INSTRUCTIONS_DATA) public instructionsData) { }

  ngOnInit() {
    // Display the component/templateRef passed into data
    this.templateMap = this.templateData;
    this.instructionsMap = this.instructionsData;
  }

  getKeys() {
    return Array.from(this.templateMap.keys());
  }

  close() {
    this.dialogRef.close();
  }

}
