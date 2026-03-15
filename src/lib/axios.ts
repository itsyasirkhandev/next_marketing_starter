import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from 'axios';

// ─── Configuration ──────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';
const TIMEOUT = 15_000; // 15 seconds

// ─── Create Axios Instance ──────────────────────────────────────────────────
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── Request Interceptor ───────────────────────────────────────────────────
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Attach auth token if available (e.g. from localStorage or cookies)
    // Uncomment and adjust when authentication is implemented:
    //
    // const token = typeof window !== "undefined"
    //   ? localStorage.getItem("auth_token")
    //   : null;
    //
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// ─── Response Interceptor ──────────────────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;

      switch (status) {
        case 401:
          // Handle unauthorized – e.g. redirect to login
          console.error('[Axios] 401 Unauthorized');
          break;
        case 403:
          console.error('[Axios] 403 Forbidden');
          break;
        case 404:
          console.error('[Axios] 404 Not Found');
          break;
        case 500:
          console.error('[Axios] 500 Internal Server Error');
          break;
        default:
          console.error(`[Axios] Error ${status}`);
      }
    } else if (error.request) {
      // Request was made but no response received (network error)
      console.error('[Axios] Network error – no response received');
    } else {
      // Something happened in setting up the request
      console.error('[Axios] Request setup error:', error.message);
    }

    return Promise.reject(error);
  },
);

// ─── Typed Helper Methods ──────────────────────────────────────────────────

/** Type-safe GET request */
export async function apiGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.get<T>(url, config);
  return response.data;
}

/** Type-safe POST request */
export async function apiPost<T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await api.post<T>(url, data, config);
  return response.data;
}

/** Type-safe PUT request */
export async function apiPut<T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await api.put<T>(url, data, config);
  return response.data;
}

/** Type-safe PATCH request */
export async function apiPatch<T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await api.patch<T>(url, data, config);
  return response.data;
}

/** Type-safe DELETE request */
export async function apiDelete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.delete<T>(url, config);
  return response.data;
}

export default api;
