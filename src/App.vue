<script setup lang="ts">
import { onMounted } from 'vue';
import { v4 as uuidv4 } from "uuid"

import { useAppStore } from '@app/store';
import { useLocalStorage } from '@app/composables/useLocalStorage';
import { LocalKeys } from '@app/constants';
import { watch } from 'vue';
import { SettingsApi, SongApi, WSConnectionApi, } from '@app/api';

const store = useAppStore();

onMounted(() => {
  /**
   * Udpate the value of client_id from localStorage if existing
   * or generate new value using uuid.
   */
  store.$patch({ client_id: useLocalStorage('get', LocalKeys.CLIENT_ID) ?? uuidv4() });

  WSConnectionApi.connect(store.client_id);
})

/**
 * Watch the client_id value and save it to localStorage when changed.
 * This ensures that client_id doesn't change when the server is shutted down.
 */
watch(() => store.client_id, () => {
  useLocalStorage('set', LocalKeys.CLIENT_ID, store.client_id);
}, { deep: true })

</script>

<template>
  <main>
  </main>
</template>
