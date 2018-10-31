import { Component, AfterViewInit, QueryList, ViewChildren, TemplateRef } from '@angular/core';
import { TrainingOverlayService } from '../training-overlay/training-overlay.service';
import { TrainingDirective } from '../training.directive';


@Component({
  selector: 'app-training-element',
  templateUrl: './training-element.component.html',
  styleUrls: ['./training-element.component.scss']
})
export class TrainingElementComponent implements AfterViewInit {

  @ViewChildren(TrainingDirective) trainingDirectives: QueryList<TrainingDirective>;

  templateMap: Map<string, TemplateRef<any>> = new Map();
  instructionsMap: Map<string, string> = new Map();

  constructor(private trainingService: TrainingOverlayService) {
    // Set training instructions for each training element
    this.instructionsMap.set('training1', 'These are instructions on how to use component 1');
    this.instructionsMap.set('training2', 'These are instructions on how to use component 2');
  }

  ngAfterViewInit() {
    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() =>
      this.trainingDirectives.forEach(directive => {
        this.templateMap.set(directive.name, directive.templateRef);
      })
    );
  }

  onTraining() {
    // Open a dialog with the template ref embedded
    this.trainingService.open(this.templateMap, this.instructionsMap);
  }

  getTemplate(key: string) {
    return this.templateMap.get(key);
  }

}
