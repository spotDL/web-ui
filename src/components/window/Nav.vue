<script setup lang="ts">
import GitHubIcon from "@app/components/icons/GitHubIcon.vue"
import CogIcon from "@app/components/icons/CogIcon.vue"
</script>

<template>
    <div class="navbar px-4">
        <div class="flex-1"></div>
        <div class="flex-none space-x-4">
            <button for type="button" onclick="settings.showModal()" class="btn btn-ghost btn-square">
                <CogIcon />
            </button>
            <a class="btn btn-primary" href="#">
                <GitHubIcon />
                Star on GitHub
            </a>
        </div>
    </div>
</template>