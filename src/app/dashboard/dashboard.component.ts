import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Panel } from '../dashboard-panel/panel';
import { TrainingOverlayService } from '../training-overlay/training-overlay.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  panels: Panel[] = [
    { title: 'Panel 1', text: 'Panel 1 Text' },
    { title: 'Panel 2', text: 'Panel 2 Text' },
    { title: 'Panel 3', text: 'Panel 3 Text' },
  ];

  title = 'Training Overlay';

  @ViewChild('trainingTemplate', { read: TemplateRef }) templateRef: TemplateRef<any>;

  constructor(private trainingService: TrainingOverlayService) { }

  ngOnInit() {
  }

  onTraining() {
    // Open a dialog with the template ref embedded
    this.trainingService.open(this.templateRef, 'These are instructions on how to use this component');
  }

  onClick() {
    console.log('Clicked!');
  }

}
