<script lang="ts">
  import { THEME } from '@app/store';
  import Main from '$lib/components/window/Main.svelte';
</script>

<div data-theme={$THEME}>
  <Main>
    <slot />
  </Main>
</div>
