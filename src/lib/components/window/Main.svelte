<script>
  import Drawer from '$lib/components/shared/layout/Drawer.svelte';
  import Nav from './Nav.svelte';
  import Queue from './Queue.svelte';
</script>

<Drawer name="main">
  <div slot="main">
    <Nav />
    <main class="h-fit pt-2 flex">
      <div class="flex h-full w-full overflow-y-auto" />
    </main>
  </div>
  <div slot="drawer" class="h-fit w-fit">
    <Queue />
  </div>
</Drawer>
