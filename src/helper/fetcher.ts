type Params = Record<string, string | number | boolean | undefined>;

type FetchOptions = RequestInit & {
  params?: Params;
};

type FetchMeta = {
  total: number;
  totalPages: number;
};

export class HttpError extends Error {
  constructor(
    public status: number,
    public url: string,
    public body?: unknown,
  ) {
    super(`HTTP ${status} on ${url}`);
    this.name = "HttpError";
  }
}

async function request<T>(
  url: string,
  { params, ...init }: FetchOptions = {},
): Promise<{
  data: T;
  headers: Headers;
}> {
  const requestUrl = new URL(url);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        requestUrl.searchParams.set(key, String(value));
      }
    }
  }

  const headers = new Headers(init.headers);

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(requestUrl, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => undefined);

    throw new HttpError(response.status, requestUrl.toString(), body);
  }

  const data = response.status === 204 ? (undefined as T) : ((await response.json()) as T);

  return {
    data,
    headers: response.headers,
  };
}

export async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { data } = await request<T>(url, options);

  return data;
}

export async function fetcherWithMeta<T>(
  url: string,
  options: FetchOptions = {},
): Promise<{ data: T; meta: FetchMeta }> {
  const { data, headers } = await request<T>(url, options);

  return {
    data,
    meta: {
      total: Number(headers.get("X-WP-Total") ?? 0),
      totalPages: Number(headers.get("X-WP-TotalPages") ?? 0),
    },
  };
}
