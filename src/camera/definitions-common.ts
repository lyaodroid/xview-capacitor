import type { CameraPermissionState  } from './definitions';

export interface PermissionStatus {
  camera: CameraPermissionState;
  photos: CameraPermissionState;
}
