import type { PageLoad } from './$types';
import type { Category } from '@app/spotify';

export const load = (async ({ parent, fetch }) => {
  const { access_token } = await parent();

  const response = await fetch('https://api.spotify.com/v1/browse/categories?limit=50&offset=0', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  const results = (await response.json()) as Category;

  return {
    results
  };
}) satisfies PageLoad;
