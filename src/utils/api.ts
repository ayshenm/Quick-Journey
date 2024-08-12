const BASE_URL = 'https://api.quick-journey.com/api';

interface ApiRequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

const apiRequest = async <T>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> => {
  const { requiresAuth, headers, ...restOptions } = options;

  const defaultHeaders: { [key: string]: string } = {
    'Content-Type': 'application/json'
  };

  if (requiresAuth) {
    const token = localStorage.getItem('access_token');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    } else {
      throw new Error('Authentication required but no token found');
    }
  }

  // Merge custom headers with default headers
  const combinedHeaders = { ...defaultHeaders, ...(headers as { [key: string]: string }) };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: combinedHeaders,
    ...restOptions
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  // TODO: Check for API Resonse code, if 401 clear localstorage and redirect to login (trigger logout)
  return response.json();
};

export default apiRequest;
