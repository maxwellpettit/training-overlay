import { Component, OnInit } from '@angular/core';
import {Panel} from './panel';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {

  panel: Panel;

  constructor() { }

  ngOnInit() {
  }

}
