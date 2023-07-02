<script setup lang="ts">
import { onMounted } from 'vue';
import { v4 as uuidv4 } from "uuid"
import { themeChange } from "theme-change"

import { useAppStore } from '@app/store';
import { useLocalStorage } from '@app/composables/useLocalStorage';
import { LocalKeys } from '@app/constants';
import { watch } from 'vue';
import { SettingsApi, SongApi, WSConnectionApi, } from '@app/api';

import Main from "@app/components/window/Main.vue"
import Settings from "@app/components/window/Settings.vue"

const store = useAppStore();

onMounted(() => {
  themeChange(true);
  store.$patch({ client_id: useLocalStorage('get', LocalKeys.CLIENT_ID) ?? uuidv4() });

  // WSConnectionApi.connect(store.client_id);
})

watch(() => store.client_id, () => {
  useLocalStorage('set', LocalKeys.CLIENT_ID, store.client_id);
}, { deep: true })

</script>

<template>
  <Main />
</template>
