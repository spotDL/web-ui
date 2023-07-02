<script setup lang="ts">
import { ref } from "vue"

import { useInterval } from "@app/composables/useInterval"

const hints = [
    'All Eyes On Me - Bo Burnham',
    'https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f',
    'Lil Wayne',
    'Drive - Miley Cyrus',
    'Sofia - TMG',
    'Lightning Crashes - Live',
]
const hint = ref<string>(hints[0]);

const pollHints = () => {
    hints.push(hints.shift());
    hint.value = hints[0];
}

useInterval(pollHints, 6000);

</script>

<template>
    <div class="relative w-full h-fit flex items-center">
        <input type="text" :placeholder="hint"
            class="input placeholder:text-base-content/50 input-bordered w-full text-base-content bg-base-300 pr-12" />
        <SearchIcon class="w-6 h-6 text-primary -ml-10" />
    </div>
</template>

<script lang="ts">
import SearchIcon from "@app/components/icons/SearchIcon.vue"
</script> 