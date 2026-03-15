/**
 * A native fetch wrapper optimized for Next.js caching.
 *
 * Replaces Axios to utilize Next.js App Router Data Cache.
 * By using native fetch, we also rely on httpOnly cookies automatically sent
 * by the browser to our API for secure session hydration, resolving the XSS
 * vulnerabilities with localStorage.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

type FetchOptions = RequestInit;

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export async function apiFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `HTTP Error ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Ignore JSON parsing errors for error bodies
    }

    // Instead of logging raw errors to client console, we just throw
    // to be caught by React Error Boundaries or TanStack Query.
    throw new ApiError(errorMessage, response.status);
  }

  // Not all responses have body (like 204 No Content)
  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}

export async function apiGet<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  return apiFetch<T>(endpoint, { ...options, method: 'GET' });
}

export async function apiPost<T, D = unknown>(
  endpoint: string,
  data: D,
  options?: FetchOptions,
): Promise<T> {
  return apiFetch<T>(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function apiPut<T, D = unknown>(
  endpoint: string,
  data: D,
  options?: FetchOptions,
): Promise<T> {
  return apiFetch<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function apiPatch<T, D = unknown>(
  endpoint: string,
  data: D,
  options?: FetchOptions,
): Promise<T> {
  return apiFetch<T>(endpoint, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export async function apiDelete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  return apiFetch<T>(endpoint, { ...options, method: 'DELETE' });
}
