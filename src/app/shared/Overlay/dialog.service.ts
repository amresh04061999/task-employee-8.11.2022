import { Overlay, ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DialogService {
  overlayRef: any;
  constructor(private overlay: Overlay,) { }
  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>,) {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global().centerVertically().centerHorizontally()
    // Create the overlay with customizable options
    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
    });
    const portal = new ComponentPortal(component);
    const instance = this.overlayRef.attach(portal);

    return instance;
  }
  close() {
    this.overlayRef.detach()
  }

}



