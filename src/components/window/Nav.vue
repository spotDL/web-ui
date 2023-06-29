<script setup lang="ts">
import GitHubIcon from "@app/components/icons/GitHubIcon.vue"
import CogIcon from "@app/components/icons/CogIcon.vue"
import ThemeButton from "@app/components/shared/Theme.vue"
</script>

<template>
    <div class="navbar px-4">
        <div class="flex-1"></div>
        <div class="flex-none space-x-4">
            <ThemeButton />
            <button type="button" onclick="settings.showModal()" class="btn btn-ghost btn-square">
                <CogIcon class="w-6 h-6" />
            </button>
            <a class="btn btn-primary" href="#">
                <GitHubIcon class="w-5 h-5" />
                Star on GitHub
            </a>
        </div>
    </div>
</template>