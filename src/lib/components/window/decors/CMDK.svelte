<script lang="ts">
  import { SEARCH_QUERY } from '@app/store';
  import { onDestroy, onMount } from 'svelte';
  import { parseKeybinding, tinykeys } from 'tinykeys';
  import SearchIcon from '../../icons/SearchIcon.svelte';
  import { goto } from '$app/navigation';

  let unsubscribeKbdListener: ReturnType<typeof tinykeys>;
  let modalToggle: HTMLInputElement;
  let searchInput: HTMLInputElement;

  onMount(() => {
    unsubscribeKbdListener = tinykeys(window, {
      '$mod+k': (event: KeyboardEvent) => {
        event.preventDefault();
        modalToggle.checked = true;
        searchInput.focus();
      },
      Escape: (event: KeyboardEvent) => {
        event.preventDefault();
        modalToggle.checked = false;
      }
    });
  });

  onDestroy(() => {
    unsubscribeKbdListener?.();
  });

  const handleSubmit = (_event: Event) => {
    if (!$SEARCH_QUERY) {
      return;
    }
    modalToggle.checked = false;
    goto(`/search/${$SEARCH_QUERY}`);
  };
</script>

<input bind:this={modalToggle} type="checkbox" id="cmdk" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative mb-72">
    <div class="absolute left-0 top-0 flex h-[96px] w-[96px] items-center justify-center">
      <SearchIcon class="h-5 w-5" />
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <input
        placeholder="Search"
        bind:this={searchInput}
        bind:value={$SEARCH_QUERY}
        class="input w-full px-[48px]" />
    </form>
    <div class="absolute right-0 top-0 flex h-[96px] w-[96px] items-center justify-center">
      <button on:click={() => (modalToggle.checked = false)}>
        <kbd class="kbd kbd-sm">Esc</kbd>
      </button>
    </div>
  </div>
  <label for="cmdk" class="modal-backdrop" />
</div>
