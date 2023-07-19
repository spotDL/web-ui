<script lang="ts">
  import Section from '@app/lib/components/shared/layout/Section.svelte';
  import type { PageData } from './$types';
  import CategoryItem from '@app/lib/components/shared/cards/CategoryItem.svelte';

  export let data: PageData;
  const { results } = data;
</script>

<div class="h-full w-full">
  <div class="mx-auto flex h-72 w-full max-w-lg items-center justify-center">
    <center class="my-auto">
      Press <kbd class="kbd">⌘ + k</kbd> to search.
    </center>
  </div>
  <Section title="Browse categories">
    <div class="grid grid-flow-row gap-8 max-md:grid-cols-3 md:grid-cols-6 2xl:grid-cols-9">
      {#each results.categories.items as item}
        <CategoryItem {item} />
      {/each}
    </div>
  </Section>
</div>
