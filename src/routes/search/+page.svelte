<script lang="ts">
  import SearchBar from '@app/lib/components/window/SearchBar.svelte';
  import { SEARCH_FILTER } from '@app/store';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="h-full w-full">
  <div class="my-2 min-h-[72px] w-full">
    <SearchBar />
  </div>
</div>
