<script lang="ts">
  import { THEME } from '@app/store';

  import { ChevronDownIcon, CheckIcon, PaintIcon } from '$lib/components/icons';
  const themes = ['light', 'dark', 'forest', 'cupcake', 'cyberpunk'];
</script>

<div class="dropdown dropdown-end">
  <button class="btn btn-ghost hidden md:inline-flex normal-case">
    <PaintIcon class="h-5 w-5" />
    Theme
    <ChevronDownIcon class="h-4 w-4" />
  </button>
  <div class="dropdown-content bg-base-300 text-base-content w-56 rounded-box mt-2">
    {#each themes as theme}
      <div class="grid grid-cols-1 p-2">
        <button
          class="outline-base-content overflow-hidden rounded-lg text-left"
          on:click={() => THEME.set(theme)}>
          <div class="bg-base-100 text-base-content w-full cursor-pointer" data-theme={theme}>
            <div class="grid grid-cols-5 grid-rows-3">
              <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                  <div class="bg-primary w-2 rounded" />
                  <div class="bg-secondary w-2 rounded" />
                  <div class="bg-accent w-2 rounded" />
                  <div class="bg-neutral w-2 rounded" />
                </div>
                <div class="flex-grow text-sm capitalize ml-2">{theme}</div>
                <CheckIcon class={`w-4 h-4 shrink-0 ${!($THEME === theme) && 'invisible'}`} />
              </div>
            </div>
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>
