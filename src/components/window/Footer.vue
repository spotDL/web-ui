<script setup lang="ts">
import { DOCS_LINK, DISCORD_LINK, REPO_LINK } from "@app/constants"
</script>

<template>
    <footer class="footer py-8 px-4 text-base-content">
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
            <h5 class="footer-title">Communities</h5>
            <a target="_blank" rel="noopener noreferrer" class="link link-hover" :href="REPO_LINK">GitHub</a>
            <a target="_blank" rel="noopener noreferrer" class="link link-hover" :href="DISCORD_LINK">Discord</a>
        </div>
    </footer>
</template>