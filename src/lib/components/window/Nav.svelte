<script lang="ts">
  import { GitHubIcon, DiscordIcon, QueueIcon } from '$lib/components/icons';
  import { REPO_LINK, DISCORD_LINK } from '@app/constants';
  import ThemeChanger from './decors/ThemeChanger.svelte';

  import { spotdl } from '@app/api';
  import { onMount } from 'svelte';

  let spotDLVersion: string = '0.0.0';

  onMount(async () => {
    if (import.meta.env.PROD) spotDLVersion = await spotdl.getVersion();
  });
</script>

<div class="navbar sticky top-0 z-10 bg-base-100 px-2">
  <div class="flex-1">
    <a class="btn btn-ghost text-2xl normal-case" href="/">
      <div class="flex-none">
        <img src="app_icon.svg" alt="app_icon" width="28" height="28" />
      </div>
      <div class="font-sans max-md:hidden">spot<span class="text-[#16cd57]">DL</span></div>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={REPO_LINK}
      class="link-hover link ml-2 font-mono text-xs">v{spotDLVersion}</a>
  </div>
  <div class="flex-none space-x-4">
    <ThemeChanger />
    <label for="main" class="btn btn-square btn-ghost">
      <QueueIcon class="h-6 w-6" />
    </label>
    <div class="divider divider-horizontal my-auto h-4 max-md:hidden" />
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-square btn-ghost max-md:hidden"
      href={DISCORD_LINK}>
      <DiscordIcon class="h-5 w-5" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary normal-case max-md:btn-square"
      href={REPO_LINK}>
      <GitHubIcon class="h-5 w-5" />
      <span class="max-md:hidden">Star on GitHub</span>
    </a>
  </div>
</div>
