<script lang="ts">
  import { THEME } from '@app/store';

  import { ChevronDownIcon, CheckIcon, PaintIcon } from '$lib/components/icons';
  const themes = ['light', 'dark', 'forest', 'cupcake', 'cyberpunk'];
</script>

<div class="dropdown dropdown-end">
  <button class="btn btn-ghost hidden normal-case md:inline-flex">
    <PaintIcon class="h-5 w-5" />
    Theme
    <ChevronDownIcon class="h-4 w-4" />
  </button>
  <div class="dropdown-content rounded-box mt-2 w-56 bg-base-300 text-base-content">
    {#each themes as theme}
      <div class="grid grid-cols-1 p-2">
        <button
          class="overflow-hidden rounded-lg text-left outline-base-content"
          on:click={() => THEME.set(theme)}>
          <div class="w-full cursor-pointer bg-base-100 text-base-content" data-theme={theme}>
            <div class="grid grid-cols-5 grid-rows-3">
              <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
                <div class="ml-2 flex-grow text-sm capitalize">{theme}</div>
                <CheckIcon class={`h-4 w-4 shrink-0 ${!($THEME === theme) && 'invisible'}`} />
              </div>
            </div>
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>
