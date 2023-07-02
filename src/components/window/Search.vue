<script setup lang="ts">
import { useAppStore } from "@app/store"

const store = useAppStore();
</script>

<template>
    <section class="w-full h-full py-2">
        <!-- Warn banner -->
        <Alert type="info" :hide="store.searchAlterHidden" :action="() => store.$patch({ searchAlterHidden: true })">
            <template v-slot:message>
                <p>This web interface currently downloads only songs.
                    Album, Artist, Playlist and Show links will not work.
                </p>
            </template>
        </Alert>
        <div class="w-full max-w-md mt-4">
            <SearchInput />
        </div>
    </section>
</template>

<script lang="ts">
import SearchInput from "@app/components/modules/SearchInput.vue"
import Alert from "@app/components/shared/layout/Alert.vue";
</script>