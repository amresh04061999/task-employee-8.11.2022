import { Overlay, ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable()
export class DialogService {
  overlayRef: any;
  // public close: Subject<boolean>
  constructor(private overlay: Overlay,) {
    // this.close = new Subject();
  }
  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>,) {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    // Create the overlay with customizable options
    this.overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
      width: 500,
    });

    const portal = new ComponentPortal(component);
    const instance = this.overlayRef.attach(portal);
    return instance;
  }
  close() {
    this.overlayRef.detach()
  }

}



