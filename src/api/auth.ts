import { apiGet, apiPost } from '@/utils';

interface LoginResponse {
  access_token: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  return apiPost<LoginResponse, LoginRequest>('/auth/signin', data, false);
};

export const logoutRequest = async (): Promise<void> => {
  return apiGet<void>('/auth/logout', true);
};
