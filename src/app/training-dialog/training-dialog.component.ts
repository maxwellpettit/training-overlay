import { Component, OnInit, Inject, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainingDirective } from '../training.directive';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.css']
})
export class TrainingDialogComponent implements OnInit {

  @ViewChild(TrainingDirective) host: TrainingDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // Display the component passed into the dialog data

    console.log('DATA: ' + this.data);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createEmbeddedView(this.data);

    // this.host.viewContainerRef = this.data;
  }

}
