import apiRequest from './api';

export const apiGet = async <T>(endpoint: string, requiresAuth: boolean = true): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'GET',
    requiresAuth
  });
};

export const apiPost = async <T, R>(
  endpoint: string,
  body: R,
  requiresAuth: boolean = true
): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    requiresAuth
  });
};

export const apiPut = async <T, R>(
  endpoint: string,
  body: R,
  requiresAuth: boolean = true
): Promise<T> => {
  return apiRequest<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
    requiresAuth
  });
};
