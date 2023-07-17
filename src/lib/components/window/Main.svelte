<script>
  import Drawer from '$lib/components/shared/layout/Drawer.svelte';
  import Nav from './Nav.svelte';
  import Queue from './Queue.svelte';
</script>

<Drawer name="main">
  <div slot="main">
    <Nav />
    <main class="flex h-fit pt-2">
      <div class="flex h-full w-full overflow-y-auto px-2">
        <slot />
      </div>
    </main>
  </div>
  <div slot="drawer">
    <Queue />
  </div>
</Drawer>
