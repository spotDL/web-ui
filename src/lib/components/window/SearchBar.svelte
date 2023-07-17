<script lang="ts">
  import { LocalKeys } from '@app/constants';
  import { useLocalStorage } from '@app/lib/utils/local-storage';
  import { SEARCH_FILTER, SEARCH_QUERY } from '@app/store';
  import { SearchIcon } from '$lib/components/icons';
  import { goto } from '$app/navigation';
  import { createURLFrom } from '@app/lib/utils/url';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  const filters = ['all', 'tracks', 'albums', 'artists', 'playlists'];

  const handleFormSubmit = () => {
    goto(createURLFrom('/search', { params: { query: $SEARCH_QUERY } }));
  };

  $: {
    $SEARCH_FILTER;
    useLocalStorage('set', LocalKeys.SEARCH_FILTER, $SEARCH_FILTER);
  }

  onMount(() => SEARCH_QUERY.set($page.url.searchParams.get('query') ?? ''));
</script>

<div class="h-full space-x-4 md:flex">
  <form on:submit|preventDefault={handleFormSubmit} class="flex h-full w-full md:max-w-lg">
    <input
      bind:value={$SEARCH_QUERY}
      type="text"
      placeholder="Search"
      class="max input input-bordered w-full" />
    <button type="submit" class="btn btn-square btn-primary ml-2">
      <SearchIcon class="h-5 w-5" />
    </button>
  </form>
  <div class="divider divider-horizontal my-2" />
  <div class="flex h-full w-fit space-x-2">
    {#each filters as filter}
      <div class="h-fit w-fit">
        <input
          checked={$SEARCH_FILTER === filter}
          type="radio"
          bind:group={$SEARCH_FILTER}
          value={filter}
          id={filter}
          name="filter"
          aria-label={filter}
          class="btn w-full px-4" />
      </div>
    {/each}
  </div>
</div>
