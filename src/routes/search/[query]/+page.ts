import type { PageLoad } from './$types';

export const load = (({ params, fetch, setHeaders }) => {
  console.log(params);
  return {
    query: params.query
  };
}) satisfies PageLoad;
