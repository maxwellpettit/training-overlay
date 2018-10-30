import { Component } from '@angular/core';
import { Panel } from '../dashboard-panel/panel';
import { TrainingElementComponent } from '../training-element/training-element.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends TrainingElementComponent {

  panels: Panel[] = [
    { title: 'Panel 1', text: 'Panel 1 Text' },
    { title: 'Panel 2', text: 'Panel 2 Text' },
    { title: 'Panel 3', text: 'Panel 3 Text' },
  ];

  title = 'Training Overlay';
  elementText = 'This is a Training Element';

  onClick() {
    console.log('Clicked!');
  }

}
