export interface AccessToken {
  applicationId?: string;
  declinedPermissions?: string[];
  expires?: string;
  isExpired?: boolean;
  lastRefresh?: string;
  permissions?: string[];
  token: string;
  userId?: string;
}

export interface FacebookResponse {
  accessToken: AccessToken | null;
  recentlyGrantedPermissions?: string[];
  recentlyDeniedPermissions?: string[];
}

export interface FacebookCurrentAccessTokenResponse {
  accessToken: AccessToken | null;
}

export interface FacebookPlugin {
  login(options: { permissions: string[] }): Promise<FacebookResponse>;
  logout(): Promise<void>;
  getCurrentAccessToken(): Promise<FacebookCurrentAccessTokenResponse>;
  getProfile<T extends object>(options: {
    fields: readonly string[];
  }): Promise<T>;
}

export interface FacebookGetLoginStatusResponse {
  status: 'connected';
  authResponse: {
    accessToken: string;
    expiresIn: number;
    reauthorize_required_in: number;
    signedRequest: string;
    userID: string;
  };
}

export interface FacebookError {
  message: string;
  type: string;
  code: number;
}

export interface FacebookGetProfileResponse {
  error: FacebookError | null;
}
