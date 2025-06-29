export interface UserConfig {
  name: string;
  email: string;
  country: string;
  address: string;
  language: 'pt' | 'en' | 'es';
}

export interface UserConfigRequest{
  user_name: string,
  defaultLocation: string,
  useGps: boolean;
  language: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: UserConfig;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}