<script lang="ts">
  import Section from '@app/lib/components/shared/layout/Section.svelte';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import CategoryPlaylist from '@app/lib/components/shared/cards/CategoryPlaylist.svelte';

  export let data: PageData;
  const { playlists, category } = data;
</script>

<div class="h-full w-full">
  <div class="flex h-52 w-full items-end justify-start p-8">
    <h1 class="text-8xl font-bold">{category.name}</h1>
  </div>
  <Section title={`Popular ${category.name} playlists`}>
    <div class="grid grid-flow-row gap-8 max-md:grid-cols-3 md:grid-cols-5 2xl:grid-cols-8">
      {#each playlists.items as playlist}
        <CategoryPlaylist {playlist} />
      {/each}
    </div>
  </Section>
</div>
