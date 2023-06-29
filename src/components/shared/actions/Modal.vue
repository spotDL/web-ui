<script setup lang="ts">
defineProps({ name: { type: String, required: true }, title: { type: String, required: true } });
</script>

<template>
    <dialog :id="name" class="modal modal-bottom md:modal-middle">
        <form method="dialog" class="modal-box px-8">
            <h2 class="font-bold text-xl text-primary mb-4">{{ title }}</h2>
            <slot />
        </form>
        <form method="dialog" class="modal-backdrop">
            <button class="cursor-default">close</button>
        </form>
    </dialog>
</template>