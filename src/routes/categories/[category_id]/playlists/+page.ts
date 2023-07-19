import type { CategoryItem, CategoryPlaylist } from '@app/spotify';
import type { PageLoad } from './$types';

export const load = (async ({ parent, fetch, params }) => {
  const { access_token } = await parent();

  const res_playlist = await fetch(
    `https://api.spotify.com/v1/browse/categories/${params.category_id}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  );
  const { playlists } = (await res_playlist.json()) as CategoryPlaylist;

  const res_category = await fetch(
    `https://api.spotify.com/v1/browse/categories/${params.category_id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  );

  const category = (await res_category.json()) as CategoryItem;

  return {
    playlists,
    category
  };
}) satisfies PageLoad;
