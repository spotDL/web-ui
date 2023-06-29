<script setup lang="ts">
import Modal from "@app/components/shared/actions/Modal.vue"

import { enumToArray } from "@app/utils/arrays"
import { Provider, FileFormat } from '@app/constants'

interface Settings {
    id: string;
    name: string;
    options: Array<{
        key: string;
        value: string
    }>
}

const settings: Array<Settings> = [
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
    <Modal name="settings" title="Settings">
        <div v-for="setting in settings" :key="setting.id" class="collapse collapse-plus">
            <input type="radio" name="providers" />
            <h3 class="font-bold text-md text-base-content collapse-title px-0">{{ setting.name }}</h3>
            <div class="collapse-content px-2">
                <div v-for="(option, index) in setting.options" :key="option.key"
                    class="flex label-text items-center py-2 space-x-4">
                    <input type="checkbox" :id="`setting-${setting.id}-${index}`" :name="`${setting.id}[]`"
                        :value="option.value" class="checkbox checkbox-sm checked:checkbox-primary rounded-md" />
                    <label :for="`setting-${setting.id}-${index}`" class="">{{ option.key }}</label>
                </div>
            </div>
        </div>
        <div class="modal-action">
            <button class="btn btn-primary">Save</button>
        </div>
    </Modal>
</template>