<script setup lang="ts">
import { enumToArray } from "@app/utils/arrays"
import { Provider, FileFormat, Bitrate } from '@app/constants'

import HelpIcon from "@app/components/icons/HelpIcon.vue"
import { ref } from "vue";

const bitrates = Bitrate;

interface Settings {
  id?: string;
  name: string;
  options: Array<{
    key: string;
    value: string
  }>
}

interface ToggleableSettings {
  id?: string;
  name: string;
  value: string;
  tip: string;
}

const providers: Array<Settings> = [
  {
    id: 'audio',
    name: 'Audio Providers',
    options: enumToArray(Provider.Audio)
  },
  {
    id: 'lyrics',
    name: "Lyrics Providers",
    options: enumToArray(Provider.Lyrics)
  }
]

const formats: Settings = {
  name: "Output File Format",
  options: enumToArray(FileFormat)
}

const togglers: Array<ToggleableSettings> = [
  {
    name: "Use YT Music data",
    value: "ytm_data",
    tip: "Use ytm data instead of spotify data when downloading using ytm link."
  },
  {
    name: "Generate lyrics files",
    value: "generate_lrc",
    tip: "Generate lrc files for downloaded songs. Requires `synced` provider to be present in the lyrics providers list."
  }
]

const useConfig = ref<boolean>(false);

</script>

<template>
  <div class="bg-base-100 h-full w-full max-w-lg px-6 py-4 overflow-y-auto relative">
    <div class="">
      <!-- Config -->
      <div>
        <div class="flex items-center pr-2">
          <label for="config-toggle"
            class="font-bold text-base-content -mb-1 collapse-title px-0 flex items-center space-x-2">Use config
            file</label>
          <input :value="useConfig" @change="useConfig = !useConfig" name="config-toggle" id="config-toggle"
            type="checkbox" class="toggle toggle-sm checked:toggle-primary" />
        </div>
        <input v-if="useConfig" accept=".json" type="file"
          :class="`file-input w-full file-input-sm file-input-bordered`" />
      </div>
      <div class="divider" />
      <!-- Providers -->
      <div :class="`${useConfig && 'pointer-events-none'}`">
        <div v-for="provider in providers" :key="provider.id" class="collapse collapse-plus">
          <input type="radio" name="settings" />
          <h3 :class="`font-bold text-md text-base-content collapse-title px-0 ${useConfig && 'opacity-[0.2]'}`">{{
            provider.name }}</h3>
          <div class="collapse-content px-2">
            <div v-for="(option, index) in provider.options" :key="option.value"
              class="flex label-text items-center py-2 space-x-4">
              <input :disabled="useConfig" type="checkbox" :id="`provider-${provider.id}-${index}`"
                :name="`${provider.id}`" :value="option.value"
                class="checkbox checkbox-sm checked:checkbox-primary rounded-md" />
              <label :for="`provider-${provider.id}-${index}`" :class="useConfig && 'opacity-[0.2]'">{{ option.key
              }}</label>
            </div>
          </div>
        </div>
        <!-- Bitrate  -->
        <div class="collapse collapse-plus">
          <input type="radio" name="settings" />
          <h3 :class="`font-bold text-md text-base-content collapse-title px-0 ${useConfig && 'opacity-[0.2]'}`">Bitrate
          </h3>
          <div class="collapse-content px-2">
            <div class="grid grid-cols-4 w-full">
              <div v-for="bitrate in bitrates" :key="bitrate"
                class="col-span-1 label-text items-center flex py-2 space-x-4">
                <input :disabled="useConfig" type="radio" :id="`bitrate-${bitrate}`" name="bitrate" :value="bitrate"
                  class="radio radio-sm checked:radio-primary" />
                <label :for="`bitrate-${bitrate}`" :class="useConfig && 'opacity-[0.2]'">{{ bitrate }}</label>
              </div>
            </div>
          </div>
        </div>
        <!-- File Format -->
        <div class="collapse collapse-plus">
          <input type="radio" name="settings" />
          <h3 :class="`font-bold text-md text-base-content collapse-title px-0 ${useConfig && 'opacity-[0.2]'}`">{{
            formats.name }}</h3>
          <div class="collapse-content px-2">
            <div v-for="option in formats.options" :key="option.value"
              class="flex label-text items-center py-2 space-x-4">
              <input :disabled="useConfig" type="radio" :id="`format-${option.value}`" name="format" :value="option.value"
                class="radio radio-sm checked:radio-primary" />
              <label :for="`format-${option.value}`" :class="useConfig && 'opacity-[0.2]'">{{ option.key }}</label>
            </div>
          </div>
        </div>
        <div class="divider" />
        <!-- Togglers -->
        <div v-for="toggler in togglers" class="flex items-center pr-2">
          <label :for="toggler.value"
            :class="`font-bold text-base-content -mb-1 collapse-title px-0 flex items-center space-x-2 ${useConfig && 'opacity-[0.2]'}`"><span>{{
              toggler.name
            }}</span>
            <span class="tooltip tooltip-top cursor-help" :data-tip="toggler.tip">
              <HelpIcon class="h-5 w-5" />
            </span>
          </label>
          <input :disabled="useConfig" :name="toggler.value" :id="toggler.value" type="checkbox"
            class="toggle toggle-sm checked:toggle-primary" />
        </div>
      </div>
    </div>
  </div>
</template>