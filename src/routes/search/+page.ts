import type { PageLoad } from './$types';

export const load = (({ url }) => {
  return {
    results: {
      params: url.searchParams.get('query')
    }
  };
}) satisfies PageLoad;
