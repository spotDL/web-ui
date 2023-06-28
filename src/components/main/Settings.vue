<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import { enumToArray } from "@app/utils/arrays"
import { Provider, FileFormat } from '@app/constants'

interface Settings {
  id: string;
  name: string;
  options: Array<{
    key: string;
    value: string;
  }>
}

const settings: Settings[] = [
  {
    id: 'audio',
    name: 'Audio Providers',
    options: enumToArray(Provider.Audio)
  },
  {
    id: 'lyrics',
    name: "Lyrics Providers",
    options: enumToArray(Provider.Lyrics)
  },
  {
    id: 'format',
    name: 'Output File Format',
    options: enumToArray(FileFormat)
  }
]

</script>

<template>
  <div class="w-full h-full">
    <Disclosure as="div" v-for="setting in settings" :key="setting.id" v-slot="{ open }">
      <h3>
        <DisclosureButton>
          <span>{{ setting.name }}</span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel>
        <div>
          <div v-for="(option, index) in setting.options" :key="option.value">
            <input :id="`setting-${setting.id}-${index}`" :name="`${setting.id}[]`" :value="option.value"
              type="checkbox" />
            <label :for="`setting-${setting.id}-${index}`">{{ option.key }}</label>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>