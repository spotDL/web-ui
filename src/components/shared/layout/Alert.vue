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
    <div v-if="!hide" :class="`alert alert-${type} flex`">
        <InfoIcon v-if="type === 'info'" class="w-6 h-6 flex-none" />
        <WarningIcon v-else-if="type === 'warning'" class="w-6 h-6 flex-none" />
        <CheckCircleIcon v-else-if="type === 'success'" class="w-6 h-6 flex-none" />
        <XCircleIcon v-else-if="type === 'error'" class="w-6 h-6 flex-none" />
        <slot name="message" />
        <button :onclick="action" class="flex-none">
            <XIcon class="w-6 h-6" />
        </button>
    </div>
</template>

<script lang="ts">
import InfoIcon from "@app/components/icons/InfoIcon.vue";
import XIcon from "@app/components/icons/XIcon.vue";
import XCircleIcon from "@app/components/icons/XCircleIcon.vue";
import CheckCircleIcon from "@app/components/icons/CheckCircleIcon.vue";
import WarningIcon from "@app/components/icons/WarningIcon.vue";
</script>