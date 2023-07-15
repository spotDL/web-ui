<script lang="ts">
  export let name: string;
</script>

<div class="drawer drawer-end">
  <input id={name} type="checkbox" class="drawer-toggle cursor-default" />
  <div class="drawer-content h-screen overscroll-y-none">
    <slot name="main" />
  </div>
  <div class="drawer-side z-20">
    <label for={name} class="drawer-overlay cursor-default" />
    <slot name="drawer" />
  </div>
</div>
