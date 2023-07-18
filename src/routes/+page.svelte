<script lang="ts">
  import { goto } from '$app/navigation';
  import { SearchIcon } from '@app/lib/components/icons';
  import { useInterval } from '@app/lib/utils/interval';
  import { createURLFrom } from '@app/lib/utils/url';
  import { SEARCH_QUERY } from '@app/store';

  const handleFormSubmit = () => {
    goto(createURLFrom('/search', { params: { query: $SEARCH_QUERY } }));
  };

  const placeholderOptions = [
    'Taylor Swift',
    'https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f',
    'Zoo Album - Russ',
    'Enter Sandman',
    'https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx',
    'No More Sorrow - Linkin Park'
  ];

  let placeholderValue = placeholderOptions[0];

  useInterval(() => {
    placeholderOptions.push(placeholderOptions.shift()!);
    placeholderValue = placeholderOptions[0];
  }, 5000);
</script>

<div class="flex h-[calc(100vh_-_64px_-_4rem)] w-full items-center justify-center">
  <div class="flex flex-col items-center">
    <img src="app_icon.svg" alt="app_icon" width="128" height="128" />
    <center class="my-6 font-sans text-6xl font-bold">
      <p>spot<span class="text-[#16cd57]">DL</span></p>
    </center>
    <center class="text-base-content">
      <p>Download your Spotify songs with embedded album art and metadata</p>
    </center>

    <form on:submit|preventDefault={handleFormSubmit} class="my-6 flex h-full w-full">
      <input
        bind:value={$SEARCH_QUERY}
        type="text"
        placeholder={placeholderValue}
        class="max input input-bordered w-full bg-base-200"
        required />
      <button type="submit" class="btn btn-square btn-primary ml-2">
        <SearchIcon class="h-5 w-5" />
      </button>
    </form>
  </div>
</div>
