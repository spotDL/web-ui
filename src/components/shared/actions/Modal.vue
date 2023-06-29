<script setup lang="ts">
const props = defineProps({ name: { type: String, required: true } });
</script>

<template>
    <dialog :id="props.name" class="modal modal-bottom md:modal-middle">
        <form method="dialog" class="modal-box px-8">
            <slot />
        </form>
        <form method="dialog" class="modal-backdrop">
            <button class="cursor-default">close</button>
        </form>
    </dialog>
</template>