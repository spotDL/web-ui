<script setup lang="ts">

import { REPO_LINK } from "@app/constants"

const appVersion = __APP_VERSION__;

</script>

<script lang="ts">
import GitHubIcon from "@app/components/icons/GitHubIcon.vue"
import CogIcon from "@app/components/icons/CogIcon.vue"
import ThemeButton from "@app/components/shared/Theme.vue"
</script>

<template>
    <div class="navbar px-4">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-2xl font-sans" href="/">
                <div class="flex-none">
                    <img src="../../assets/spotdl.svg" alt="spotdl icon" width="28" height="28" />
                </div>spot<span class="text-[#16ce57] -ml-2">DL
                </span>
            </a>
            <a target="_blank" rel="noopener noreferrer" :href="`${REPO_LINK}/releases/tag/v${appVersion}`"
                class="ml-2 link link-hover text-xs font-mono">v{{
                    appVersion }}</a>
        </div>
        <div class="flex-none space-x-4">
            <ThemeButton />
            <label class="btn btn-ghost btn-square" for="main">
                <CogIcon class="w-6 h-6" />
            </label>
            <a class="btn btn-primary max-md:btn-square normal-case" :href="REPO_LINK">
                <GitHubIcon class="w-5 h-5" />
                <span class="max-md:hidden">Star on GitHub</span>
            </a>
        </div>
    </div>
</template>