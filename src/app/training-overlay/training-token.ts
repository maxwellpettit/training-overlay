import { InjectionToken } from '@angular/core';

// Create injection tokens for the training overlay to avoid circular dependencies
export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');
