<script lang="ts">
  import SearchBar from '@app/lib/components/window/SearchBar.svelte';
  import { spotify, type SearchResults } from '@app/spotify';
  import { SPOTIFY_ACCESS_TOKEN } from '@app/store';
  import { page } from '$app/stores';
  import { afterUpdate } from 'svelte';

  let results: SearchResults;

  $: {
    $page.url.searchParams.get('query');
    updateSearch();
  }

  const updateSearch = async () => {
    results = await spotify.search(
      $page.url.searchParams.get('query') ?? '',
      $SPOTIFY_ACCESS_TOKEN
    );
  };
</script>

<div class="h-full w-full">
  <div class="my-2 min-h-[72px] w-full">
    <SearchBar />
  </div>
</div>
