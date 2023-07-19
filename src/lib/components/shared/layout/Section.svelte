<script lang="ts">
  export let title: string;
</script>

<div class="h-fit w-full bg-base-200/50 p-8">
  <div class="my-4 h-fit w-full text-2xl font-bold">
    <h3>{title}</h3>
  </div>
  <div>
    <slot />
  </div>
</div>
