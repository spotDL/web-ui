<script setup lang="ts">
import { useAppStore } from "@app/store";

const store = useAppStore();

defineProps({
    /** options: "info" | "success" | "warning" | "error" */
    type: {
        type: String,
        required: true,
    }, hide: {
        type: Boolean,
        required: false
    }, action: {
        type: Function,
        required: false
    }
})
</script>

<template>
    <div v-if="!hide" :class="`alert alert-${type}`">
        <InfoIcon v-if="type === 'info'" class="w-6 h-6" />
        <slot name="message" />
        <button :onclick="action">
            <XIcon class="w-6 h-6" />
        </button>
    </div>
</template>

<script lang="ts">
import InfoIcon from "@app/components/icons/InfoIcon.vue";
import XIcon from "@app/components/icons/XIcon.vue";
</script>