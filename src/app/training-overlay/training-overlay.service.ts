import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { TrainingOverlayRef } from './training-overlay-ref';
import { TrainingDialogComponent } from '../training-dialog/training-dialog.component';
import { TEMPLATE_DATA, TRAINING_DATA } from './training-token';

@Injectable()
export class TrainingOverlayService {

  constructor(public injector: Injector, private overlay: Overlay) { }

  open(templateRef: TemplateRef<any>, instructions: string) {
    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay();

    // Instantiate remote control
    const dialogRef = new TrainingOverlayRef(overlayRef);

    // Create and attach the dialog component
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogRef, templateRef, instructions);

    // Close dialog on backdrop click
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay() {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, dialogRef: TrainingOverlayRef,
    templateRef: TemplateRef<any>, instructions: string) {
    const portalInjector = this.createInjector(dialogRef, templateRef, instructions);

    // Create component portal (i.e. the component to display as a dialog)
    const containerPortal = new ComponentPortal(TrainingDialogComponent, null, portalInjector);

    // Attach the component portal to the overlay
    const containerRef: ComponentRef<TrainingDialogComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(dialogRef: TrainingOverlayRef, templateRef: TemplateRef<any>, instructions: string): PortalInjector {
    const injectionTokens = new WeakMap();

    // Pass the dialogRef to the TrainingDialogComponent
    injectionTokens.set(TrainingOverlayRef, dialogRef);

    // Pass the templateRef to the TrainingDialogComponent
    injectionTokens.set(TEMPLATE_DATA, templateRef);

    // Pass the training instructions to the TrainingDialogComponent
    injectionTokens.set(TRAINING_DATA, instructions);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(): OverlayConfig {
    // Position the dialog
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create overlay config
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

}
