<script lang="ts">
  import type { CategoryItem } from '@app/spotify';

  export let item: CategoryItem;
</script>

<a
  href={`/categories/${item.id}/playlists`}
  class="group card relative h-full w-full overflow-hidden bg-base-300">
  <img
    src={item.icons[0].url}
    alt={item.id}
    height="274"
    width="274"
    class="h-full w-full object-cover" />
  <div
    class="invisible absolute flex h-full w-full flex-col-reverse bg-black/75 pb-8 group-hover:visible">
    <center class="text-2xl font-semibold text-white">{item.name}</center>
  </div>
</a>
