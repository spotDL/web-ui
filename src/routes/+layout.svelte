<script lang="ts">
  import { SPOTIFY_ACCESS_TOKEN, THEME } from '@app/store';
  import Main from '$lib/components/window/Main.svelte';
  import { onMount } from 'svelte';
  import { spotify } from '@app/spotify';
  import Cmdk from '@app/lib/components/window/decors/CMDK.svelte';

  onMount(async () => {
    const token = await spotify.generateAccessToken();
    SPOTIFY_ACCESS_TOKEN.set(token);
  });
</script>

{#if $THEME}
  <div data-theme={$THEME}>
    <Main>
      <slot />
    </Main>
    <Cmdk />
  </div>
{/if}
