import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { TrainingOverlayRef } from './training-overlay-ref';
import { TrainingDialogComponent } from '../training-dialog/training-dialog.component';
import { TEMPLATE_DATA, INSTRUCTIONS_DATA } from './training-token';

@Injectable()
export class TrainingOverlayService {

  constructor(public injector: Injector, private overlay: Overlay) { }

  open(templateMap: Map<string, TemplateRef<any>>, instructionsMap: Map<string, string>) {
    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay();

    // Instantiate remote control
    const dialogRef = new TrainingOverlayRef(overlayRef);

    // Create and attach the dialog component
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogRef, templateMap, instructionsMap);

    // Close dialog on backdrop click
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay() {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, dialogRef: TrainingOverlayRef,
    templateMap: Map<string, TemplateRef<any>>, instructionsMap: Map<string, string>) {
    const portalInjector = this.createInjector(dialogRef, templateMap, instructionsMap);

    // Create component portal (i.e. the component to display as a dialog)
    const containerPortal = new ComponentPortal(TrainingDialogComponent, null, portalInjector);

    // Attach the component portal to the overlay
    const containerRef: ComponentRef<TrainingDialogComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(dialogRef: TrainingOverlayRef,
    templateMap: Map<string, TemplateRef<any>>, instructionsMap: Map<string, string>): PortalInjector {
    const injectionTokens = new WeakMap();

    // Pass the dialogRef to the TrainingDialogComponent
    injectionTokens.set(TrainingOverlayRef, dialogRef);

    // Pass the templateRef to the TrainingDialogComponent
    injectionTokens.set(TEMPLATE_DATA, templateMap);

    // Pass the training instructions to the TrainingDialogComponent
    injectionTokens.set(INSTRUCTIONS_DATA, instructionsMap);

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
