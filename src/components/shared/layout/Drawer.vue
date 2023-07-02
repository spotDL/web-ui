<script setup lang="ts">
defineProps({ name: { type: String, required: true }, title: { type: String, required: true } })
</script>

<template>
    <div class="drawer drawer-end">
        <input :id="name" type="checkbox" class="drawer-toggle cursor-default" />
        <div class="drawer-content max-h-screen overscroll-y-none">
            <slot :name="name" />
        </div>
        <div class="drawer-side z-20">
            <label :for="name" class="drawer-overlay cursor-default" />
            <slot name="drawer-content" />
        </div>
    </div>
</template>