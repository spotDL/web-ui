import { spotify } from '@app/spotify';
import '../app.css';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const csr = true;
export const prerender = true;

export const load = (async () => {
  const access_token = await spotify.generateAccessToken();
  return {
    access_token
  };
}) satisfies LayoutLoad;
