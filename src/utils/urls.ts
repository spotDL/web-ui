import { type Option } from '@app/types';

export interface QueryProps {
  params?: Record<string, string>;
}
/**
 * Creates a URL with query parameters.
 * @param {string} url The base URL.
 * @param {QueryProps} query The query strings.
 * @returns {string} The created URL.
 */
export const createURL = (url: string, query?: QueryProps): string => {
  let mainURL = url;

  if (query && query.params) {
    mainURL += '?';

    const queries: string[] = [];

    for (const [key, value] of Object.entries(query.params))
      queries.push(`${key}=${encodeURIComponent(value)}`);

    mainURL += queries.join('&');
  }

  return mainURL;
};
