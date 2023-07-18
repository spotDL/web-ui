<script lang="ts">
  import { SPOTIFY_ACCESS_TOKEN, THEME } from '@app/store';
  import Main from '$lib/components/window/Main.svelte';
  import { onMount } from 'svelte';
  import { spotify } from '@app/spotify';

  onMount(async () => {
    $SPOTIFY_ACCESS_TOKEN = await spotify.generateAccessToken();
  });
</script>

<div data-theme={$THEME}>
  <Main>
    <slot />
  </Main>
</div>
