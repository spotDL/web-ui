<script lang="ts">
  import type { SimplifiedPlaylistObject } from '@app/spotify';

  export let playlist: SimplifiedPlaylistObject;
</script>

<a
  href={`/playlists/${playlist.id}`}
  class="group card h-full w-full bg-base-100/75 py-3 hover:bg-base-100">
  <figure class="px-3">
    <img src={playlist.images[0].url} alt={playlist.name} class="rounded-xl" />
  </figure>
  <div class="px-3">
    <h2 class="card-title py-3 text-sm">{playlist.name}</h2>
    <p class="line-clamp-3 overflow-x-clip text-clip text-sm">{playlist.description}</p>
  </div>
</a>
