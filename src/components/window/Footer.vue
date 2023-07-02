<script setup lang="ts">
import { DOCS_LINK, DISCORD_LINK, REPO_LINK } from "@app/constants"
import GitHubIcon from "../icons/GitHubIcon.vue";
import DiscordIcon from "../icons/DiscordIcon.vue";
</script>

<template>
    <footer class="footer py-8 px-2 text-base-content">
        <div>
            <img src="../../assets/spotdl.svg" alt="spotdl icon" width="48" height="48" />
            <p>
                <span class="font-bold text-lg font-sans">spot</span><span
                    class="font-bold font-sans text-lg text-[#16ce57]">DL</span> <br />
                Open Source Music
                Downloader
            </p>
        </div>
        <div>
            <h5 class="footer-title">Useful Links</h5>
            <a target="_blank" rel="noopener noreferrer" class="link link-hover" :href="DOCS_LINK">Docs</a>
            <a target="_blank" rel="noopener noreferrer" class="link link-hover"
                :href="`${REPO_LINK}/issues/new/choose`">Report an Issue</a>
        </div>
        <div>
            <h5 class="footer-title">Socials</h5>
            <div class="grid grid-flow-col gap-4">
                <a target="_blank" rel="noopener noreferrer" :href="REPO_LINK">
                    <GitHubIcon class="w-5 h-5" />
                </a>
                <a target="_blank" rel="noopener noreferrer" :href="DISCORD_LINK">
                    <DiscordIcon class="w-5 h-5" />
                </a>
            </div>
        </div>
    </footer>
</template>