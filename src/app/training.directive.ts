import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[appTraining]'
})
export class TrainingDirective {

    @Input() name: string;

    constructor(public templateRef: TemplateRef<any>) {
    }
}
