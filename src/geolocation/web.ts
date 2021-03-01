import { WebPlugin } from '@capacitor/core';

import type {
  GeolocationPlugin,
  Position,
  PositionOptions,
  WatchPositionCallback,
} from './definitions';

import type { PermissionStatus } from "./definitions-common";

export class GeolocationWeb extends WebPlugin implements GeolocationPlugin {
  async getCurrentPosition(options?: PositionOptions): Promise<Position> {    
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          resolve(pos);
        },
        err => {
          reject(err);
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 0,
          ...options,
        },
      );
    });
  }

  watchPosition(
    options: PositionOptions,
    callback: WatchPositionCallback,
  ): string {
    const id = navigator.geolocation.watchPosition(
      pos => {
        callback(pos);
      },
      err => {
        callback(null, err);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0,
        ...options,
      },
    );

    return `${id}`;
  }

  async clearWatch(options: { id: string }): Promise<void> {
    window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
  }

  async checkPermissions(): Promise<PermissionStatus> {
    if (typeof navigator === 'undefined' || !navigator.permissions) {
      throw this.unavailable('Permissions API not available in this browser');
    }

    const permission = await window.navigator.permissions.query({
      name: 'geolocation',
    });
    return { location: permission.state };
  }

  async requestPermissions(): Promise<PermissionStatus> {
    throw this.unimplemented('Not implemented on web.');
  }
}

const Geolocation = new GeolocationWeb();

export { Geolocation };
