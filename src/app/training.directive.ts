import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appTraining]'
})
export class TrainingDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}
